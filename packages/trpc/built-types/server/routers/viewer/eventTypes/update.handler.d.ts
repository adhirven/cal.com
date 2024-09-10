import type { NextApiResponse, GetServerSidePropsContext } from "next";
import type { PrismaClient } from "@calcom/prisma";
import type { TrpcSessionUser } from "../../../trpc";
import type { TUpdateInputSchema } from "./update.schema";
type SessionUser = NonNullable<TrpcSessionUser>;
type User = {
    id: SessionUser["id"];
    username: SessionUser["username"];
    profile: {
        id: SessionUser["profile"]["id"] | null;
    };
    selectedCalendars: SessionUser["selectedCalendars"];
};
type UpdateOptions = {
    ctx: {
        user: User;
        res?: NextApiResponse | GetServerSidePropsContext["res"];
        prisma: PrismaClient;
    };
    input: TUpdateInputSchema;
};
export type UpdateEventTypeReturn = Awaited<ReturnType<typeof updateHandler>>;
export declare const updateHandler: ({ ctx, input }: UpdateOptions) => Promise<{
    eventType: {
        title: string;
        isRRWeightsEnabled: boolean;
        team: {
            id: number;
            slug: string | null;
            parentId: number | null;
            parent: {
                slug: string | null;
            } | null;
            name: string;
            members: {
                user: {
                    id: number;
                    name: string | null;
                    email: string;
                    eventTypes: {
                        slug: string;
                    }[];
                };
                role: import(".prisma/client").$Enums.MembershipRole;
                accepted: boolean;
            }[];
        } | null;
        children: {
            userId: number | null;
        }[];
        workflows: {
            workflowId: number;
        }[];
        aiPhoneCallConfig: {
            enabled: boolean;
            generalPrompt: string | null;
            beginMessage: string | null;
            llmId: string | null;
        } | null;
    };
}>;
export {};

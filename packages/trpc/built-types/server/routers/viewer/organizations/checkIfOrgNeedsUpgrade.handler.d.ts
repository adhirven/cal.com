import type { TrpcSessionUser } from "../../../trpc";
type GetUpgradeableOptions = {
    ctx: {
        user: NonNullable<TrpcSessionUser>;
    };
};
export declare function checkIfOrgNeedsUpgradeHandler({ ctx }: GetUpgradeableOptions): Promise<({
    team: {
        id: number;
        slug: string | null;
        parentId: number | null;
        timeZone: string;
        metadata: import(".prisma/client").Prisma.JsonValue;
        name: string;
        bio: string | null;
        weekStart: string;
        hideBranding: boolean;
        theme: string | null;
        timeFormat: number | null;
        brandColor: string | null;
        darkBrandColor: string | null;
        smsLockState: import(".prisma/client").$Enums.SMSLockState;
        smsLockReviewedByAdmin: boolean;
        createdAt: Date;
        logoUrl: string | null;
        calVideoLogo: string | null;
        appLogo: string | null;
        appIconLogo: string | null;
        isPrivate: boolean;
        hideBookATeamMember: boolean;
        bannerUrl: string | null;
        isOrganization: boolean;
        pendingPayment: boolean;
        isPlatform: boolean;
        createdByOAuthClientId: string | null;
    };
} & {
    id: number;
    userId: number;
    teamId: number;
    role: import(".prisma/client").$Enums.MembershipRole;
    disableImpersonation: boolean;
    accepted: boolean;
})[]>;
export default checkIfOrgNeedsUpgradeHandler;

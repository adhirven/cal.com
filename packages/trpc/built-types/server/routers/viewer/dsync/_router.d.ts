export declare const dsyncRouter: import("@trpc/server/unstable-core-do-not-import").CreateRouterInner<import("@trpc/server/unstable-core-do-not-import").RootConfig<{
    ctx: import("../../../createContext").InnerContext;
    meta: object;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: {
        stringify: (object: any) => string;
        parse: <T = unknown>(string: string) => T;
        serialize: (object: any) => import("superjson/dist/types").SuperJSONResult;
        deserialize: <T_1 = unknown>(payload: import("superjson/dist/types").SuperJSONResult) => T_1;
        registerClass: (v: import("superjson/dist/types").Class, options?: string | import("superjson/dist/class-registry").RegisterOptions | undefined) => void;
        registerSymbol: (v: Symbol, identifier?: string | undefined) => void;
        registerCustom: <I, O extends import("superjson/dist/types").JSONValue>(transformer: Omit<import("superjson/dist/custom-transformer-registry").CustomTransfomer<I, O>, "name">, name: string) => void;
        allowErrorProps: (...props: string[]) => void;
    };
}>, {
    create: import("@trpc/server/unstable-core-do-not-import").MutationProcedure<{
        input: {
            name: string;
            organizationId: number | null;
            provider: string;
        };
        output: import("@boxyhq/saml-jackson").Directory;
    }>;
    get: import("@trpc/server/unstable-core-do-not-import").QueryProcedure<{
        input: {
            organizationId: number | null;
        };
        output: import("@boxyhq/saml-jackson").Directory | null;
    }>;
    delete: import("@trpc/server/unstable-core-do-not-import").MutationProcedure<{
        input: {
            organizationId: number | null;
            directoryId: string;
        };
        output: null;
    }>;
    teamGroupMapping: import("@trpc/server/unstable-core-do-not-import").CreateRouterInner<import("@trpc/server/unstable-core-do-not-import").RootConfig<{
        ctx: import("../../../createContext").InnerContext;
        meta: object;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: {
            stringify: (object: any) => string;
            parse: <T = unknown>(string: string) => T;
            serialize: (object: any) => import("superjson/dist/types").SuperJSONResult;
            deserialize: <T_1 = unknown>(payload: import("superjson/dist/types").SuperJSONResult) => T_1;
            registerClass: (v: import("superjson/dist/types").Class, options?: string | import("superjson/dist/class-registry").RegisterOptions | undefined) => void;
            registerSymbol: (v: Symbol, identifier?: string | undefined) => void;
            registerCustom: <I, O extends import("superjson/dist/types").JSONValue>(transformer: Omit<import("superjson/dist/custom-transformer-registry").CustomTransfomer<I, O>, "name">, name: string) => void;
            allowErrorProps: (...props: string[]) => void;
        };
    }>, {
        get: import("@trpc/server/unstable-core-do-not-import").QueryProcedure<{
            input: void;
            output: {
                teamGroupMapping: {
                    id: number;
                    name: string;
                    slug: string | null;
                    directoryId: string;
                    groupNames: string[];
                }[];
            };
        }>;
        create: import("@trpc/server/unstable-core-do-not-import").MutationProcedure<{
            input: {
                teamId: number;
                name: string;
                directoryId: string;
            };
            output: {
                newGroupName: string;
            };
        }>;
        delete: import("@trpc/server/unstable-core-do-not-import").MutationProcedure<{
            input: {
                teamId: number;
                groupName: string;
            };
            output: {
                deletedGroupName: string;
            };
        }>;
    }>;
}>;

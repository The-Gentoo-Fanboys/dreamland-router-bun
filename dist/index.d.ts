export declare class Router {
    private root;
    private el;
    constructor(root: ComponentElement<typeof Route>);
    navigate(path: string): boolean;
    route(path: string): boolean;
    private subroute;
    mount(root: HTMLElement): void;
}
type ShowTarget = DLElement<{
    outlet?: HTMLElement;
    routeshow?: (path: string) => void;
    routehide?: () => void;
    routeshown: boolean;
    [index: string]: any;
}> | HTMLElement;
export declare const Route: Component<{
    path?: string;
    show?: ShowTarget | ((path: string, params: Record<string, string>) => ShowTarget);
}, {}, {
    children: (ComponentElement<typeof Route> | ComponentElement<typeof Redirect>)[];
}>;
export declare const Redirect: Component<{
    path: string;
    to: string | ((path: string) => string);
}>;
export declare const Link: Component<{
    href: string;
    class?: string;
}, {
    _leak: true;
    root: HTMLAnchorElement;
    children: any;
}>;
export {};

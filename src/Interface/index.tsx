export interface Button {
    btnClass: string;
    title: string;
    onClick: () => void;
}

export interface GithubAuth {
    clientId: string;
    clientSecret: string;
}

export interface ProgressBar {
    value: number;
}

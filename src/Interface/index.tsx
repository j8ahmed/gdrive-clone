export interface HeaderProps {
    parentFolderId: string;
}

export interface ViewFilesProps {
    parentFolderId: string;
    ownerEmail: string;
}

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

export interface File {
    id?: "";
    name: string;
    isFolder: boolean;
    isImage: boolean;
    fileLink: string;
    ownerEmail: string;
    parentFolderId: string;
    fileList: string[];
}

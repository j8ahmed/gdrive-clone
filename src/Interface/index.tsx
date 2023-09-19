export interface HeaderProps {
    parentFolderId: string;
}

export interface ViewFilesProps {
    parentFolderId: string;
    userEmail: string;
}

export interface FileProps {
    open: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, file: File) => void
    file: File;
}

export interface FileModalProps {
    setShowModal: (x: boolean) => void;
    email: string;
    setEmail: (email: string) => void;
    shareFile: () => void;
    file: File;
}

export interface Button {
    btnClass: string;
    title: string;
    onClick: () => void;
}

export interface AuthProvider {
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
    sharedWith: string[];
}

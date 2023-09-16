import styles from "./style.module.scss";
import { ProgressBar } from "@/Interface";

export default function ProgressBar({ value }) {

    return (
        <progress id={styles.progressBar} className="progress progress-accent w-56" value={value} max="100"></progress>
    );
}


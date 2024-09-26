import { Header } from "@/Components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header>
          <div>Header</div>
        </Header>
      </main>
    </div>
  );
}

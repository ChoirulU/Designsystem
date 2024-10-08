// // Import global styles
// import "./styles/global.css";
// // Import CSS module
// import styles from "./styles/global.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.navbar}>Navbar</div>
//       <div className={styles.sidebar}>Sidebar
//         <ul><li><a href="/homepage"></a>Home Page</li>
//             <li>Um cel</li>
//             <li>Um cel</li>
//             <li>Um cel</li>
//         </ul>
//       </div>
//       <div className={styles.konten}>Konten</div>
//       <div className={styles.footer}>Footer</div>
//     </div>
//   );
// }
// Import global styles
import "./styles/global.css";
// Import CSS module
import styles from "./styles/global.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>Navbar</div>
      <div className={styles.sidebar}>
        Sidebar
        <ul>
          <li><a href="/homepage">Kesenian Banyuwangi</a></li>
          <li>Budaya Banyuwangi</li>
          <li>Makanan Banyuwangi</li>
          <li>Wisata Banyuwangi</li>
        </ul>
      </div>
      <div className={styles.konten}>Konten</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}

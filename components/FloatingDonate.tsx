import Link from "next/link";
import Image from "next/image";
import styles from "./FloatingDonate.module.css";

export default function FloatingDonate() {
  return (
    <Link
      href="/donate"
      className={styles.button}
      aria-label="Donate to Ananda Utsav"
    >
      
      <span>Donate</span>
    </Link>
  );
}





// import Link from "next/link";
// import Image from "next/image";
// import styles from "./FloatingDonate.module.css";

// export default function FloatingDonate() {
//   return (
//     <Link
//       href="/donate"
//       className={styles.button}
//       aria-label="Donate to Ananda Utsav"
//     >
//       <div className={styles.iconWrapper}>
//         <Image
//   src="/icons/coin.png"
//   alt=""
//   width={16}
//   height={16}
//   className={styles.coin}
// />

// <Image
//   src="/icons/coin.png"
//   alt=""
//   width={13}
//   height={13}
//   className={styles.coinSecond}
// />

// <Image
//   src="/icons/donationjar.png"
//   alt=""
//   width={34}
//   height={34}
//   className={styles.hundi}
// />

// <Image
//   src="/icons/sparkle.png"
//   alt=""
//   width={18}
//   height={18}
//   className={styles.sparkle}
// />
//       </div>

//       <span>Donate</span>
//     </Link>
//   );
// }

import Link from "next/link";
import dataBase from "../../assets/datas_f_e_m.JSON";
import styles from "./ListOfChallenges.module.css";

export default function ListOfChallenges(){
    const datas = dataBase.challenges;
    // console.log("datas : ", datas);
  return (
    <div id="liste" className={styles.toto}>
      <ul>
        {/* <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Blog Post</Link>
        </li> */}

        {datas.map(data =>
          <li key={data.id}>
            <Link href="/">
                <span>{data.id+1}.</span>{data.title}
            </Link>
          </li>
        )}

      </ul>
    </div>
  );
};


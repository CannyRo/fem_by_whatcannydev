import Link from "next/link";
import dataBase from "../../assets/datas_f_e_m.JSON";
import styles from "./ListOfChallenges.module.css";

export default function ListOfChallenges(){
    const datas = dataBase.challenges;
    // console.log("datas : ", datas);
  return (
    <div id="liste" className={styles.listContainer}>
      <ul>
        {datas.map(data =>
          <li key={data.id}>
            <Link href={"/"+data.title.replace(/\s/g, '')}>
                <span>{data.id+1}.</span>{data.title}
            </Link>
          </li>
        )}

      </ul>
    </div>
  );
};


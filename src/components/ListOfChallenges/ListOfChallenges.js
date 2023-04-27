import React from "react";
import Link from "next/link";
import dataBase from "../../assets/datas_f_e_m.JSON";
import styles from "./ListOfChallenges.module.css";

export default function ListOfChallenges({filterWord}){
    const [allData, setAllData] = React.useState(dataBase.challenges)
    // const datas = dataBase.challenges;
    // console.log("datas : ", datas);

    React.useEffect(()=>{
      let temporaryTable = [];
      if(filterWord !==''){
        // console.log("On doit mettre à jour la liste")
        dataBase.challenges.filter(data =>{
          if(data.title.includes(filterWord)){
            // console.log(`Challenge n°${data.id+1} contient le mot clé ${filterWord}`)
            temporaryTable.push(data)
          }
        })
        setAllData(temporaryTable);
      }
      if(filterWord ==''){
        setAllData(dataBase.challenges)
      }
    }, [filterWord])
  return (
    <div id="liste" className={styles.listContainer}>
      <ul>
        {allData.map(data =>
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


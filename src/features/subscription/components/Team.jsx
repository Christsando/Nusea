import React from "react";
import wisnuIMG from "../../../assets/images/Wisnu.png"
import ekaIMG from "../../../assets/images/Eka.png";
import witaIMG from "../../../assets/images/Wita.jpg";
import kireiIMG from "../../../assets/images/Kirei.png";
import zaraIMG from "../../../assets/images/Zara.jpg";
import arielIMG from "../../../assets/images/ariel.png";
import daffaIMG from "../../../assets/images/Daffa.png";
import rakhaIMG from "../../../assets/images/Rakha.png";


const team = [
  { id: 1, name: "Rizky Saputra Al Amir", role: "Technopreneur", img: ekaIMG },
  { id: 2, name: "Muhammad Daffa Fachrurozi", role: "Technopreneur", img: daffaIMG },
  { id: 3, name: "Kirei Najwa Shafira", role: "UI/UX", img: kireiIMG},
  { id: 4, name: "Azzahra Aulia Khoirunnisa", role: "UI/UX", img: zaraIMG },
  { id: 5, name: "Wita Septia Ningrum Nuriachmad Miarjo", role: "UI/UX", img: witaIMG },
  { id: 6, name: "Ariel Christsando Yudistya Putra", role: "Frontend", img: arielIMG },
  { id: 7, name: "Wisnu Cakra Putra Pamungkas", role: "Frontend", img: wisnuIMG },
  { id: 8, name: "Muhammad Rakha Alfaruq", role: "Frontend", img: rakhaIMG },
];

const TeamSection = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-8">
        Tim Kami
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-20 px-6 md:px-12">
          {team.map((member) => (
            <div key={member.id} className="group min-w-[220px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300 py-0 mb-10">

              <div className="w-full pt-5 h-48 bg-transparent flex items-center justify-center overflow-hidden group-hover:bg-blue-600 group-hover:rounded-t-lg duration-300">
                <img src={member.img} alt={member.name} className="object-cover w-3/4 h-full rounded-t-lg bg-gray-200"/>
              </div>

              <div className="w-full bg-blue-600 text-center py-3 rounded-b-lg">
                <h3 className="text-orange-500 font-bold">{member.name}</h3>
                <p className="text-white text-sm">{member.role}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

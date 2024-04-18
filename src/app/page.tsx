import Image from "next/image";

export default async function Home() {
  const RES = await fetch('http://localhost:3000/api/clients')
  const data = await RES.json()

console.log(data)

  return (
    <main>
      {
        data.map((item:any) => {
          return (
            <>
            <div className="border bg-gray-400 m-3 p-2 flex justify-center">
              <div className="uppercase flex-1">{item.name}</div>
              <div className="italic flex-1">{item.age}</div>
              <div className="italic flex-1">{item.address}</div>
            </div>
            </>
          )
        }) 
      }
    </main>
  );
} 

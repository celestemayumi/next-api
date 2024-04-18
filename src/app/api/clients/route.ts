import { Client } from "./interfaces";

const clients: Client[] = [
    {
        name: 'Celeste',
        age: 20,
        address: 'Rua 123'
    },
    {
        name: 'Luana',
        age: 19,
        address: 'Rua 321'
    },
    {
        name: 'Livia',
        age: 19,
        address: 'Rua 231'
    }
];

export function GET (){
    return Response.json(clients);
}

export async function  POST(request:Request){
    const form = await request.formData();  
    const name = form.get('name');
    const age = form.get('age')
    const address = form.get('address');

    clients.push({
        name,
        age, 
        address
    })

    return Response.json({
       status: 'Added'
    })
}
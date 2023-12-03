// 1. Import Area
// import { NamedImport } from 'somelibrary'
import { PrismaClient } from '@prisma/client'
//import { PrismaClient } from '@prisma/client/edge'

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// const classObject = new className();
   const prisma = new PrismaClient()


// 2. Defination Area
function Home() {
  // We can use server action inside the server component's function definition
  async function formAction(formData: FormData) { // Old style to declare Function = Classical way, function name should be in camleCase
  'use server'
  console.log(formData);
  const fn = formData.get('firstname');
  const ln = formData.get('surname');
  console.log('I am firstname value', fn);
  console.log('I am surname value', ln);

  // below code is created to send the record to the DB
  try{
    //prisma.modal.method()
    const student = await prisma.students_tbl.create({
    data: {
    // P:V
      firstname:"" + fn,
      surname:"" + ln
    },
  });

Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

  } catch(error) {
    console.log(error);
  }
}
  // let dkm = async () => { // New style to declare function = FAT Arrow Function

  // }
  // Every function return something
  return (
    <>
    <div className="formBox">
      <h1>Student Addmission Form</h1>
      <form method="POST" action={formAction}>
        <input type="text" name="firstname"/>
        <input type="text" name="surname"/>
        <button type="submit">Add Student</button>
      </form>
      </div>
    </>
  )
}

// 3. Export Area
// 3.1 Default export 
export default  Home;

// 3.2 Named Export
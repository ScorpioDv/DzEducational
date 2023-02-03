
import {db} from "../firebase"
import {set} from "firebase/database"
import {ref as Ref} from "firebase/database"
import { once, onValue } from 'firebase/database';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { useState,useEffect } from "react";
import uid from "uid"
import e from "cors";

export default function App(){

// RO7 T3TI
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [uploaded, setUploaded] = useState(false)
  const [year, setYear] = useState()
  const [todo, setTodo] = useState({ 
   })
  const [todos, setTodos] = useState([])
  const [currentId, setCurrentId] = useState({
    id:1
  })
  let [time, setTime] = useState()

  useEffect(() => {
    
    onValue(Ref(db), snapshot => {
      let data = snapshot.val()
     const filteredObject = Object.fromEntries(
        Object.entries(data.sujets).filter(([key, value]) => {
          if (typeof value === 'object') {
            return Object.values(value).some((v) => v.year === todo.year);
    
          }
          return false;
        })
      );
      const filteredObjectByDivisions = Object.values(filteredObject).map(data =>   Object.values(data).filter(item => item.subject === todo.division ))
      const filteredObjectBySubjects = Object.values(filteredObjectByDivisions).map(data =>   Object.values(data).filter(item => item.subject === todo.subject ))
      const exams = filteredObjectBySubjects.map(data => Object.values(data).filter(item => item.type === todo.type))
      let mapped = exams.map(exams => exams.map(exam => exam.id ))
      let mappeds = mapped.map(exam =>  Math.max(...exam))
      if(mappeds >= 1){
        setCurrentId({
          subject:todo.subject,
          id: mappeds[0] + 1,
        })
  
      }else{  
        setCurrentId({
          subject:todo.subject,
          id: 1,
        })
      }
 
      }) 
 
  }, [todo])
  console.log(currentId)
  
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', todo.sujet);  // correct way to add file to form data
    await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    setUploaded(prev => !prev)


  }
/*  const arrayOfObjects = [{ name: "jhone", id: "1" }, { name: "lissa", id: "2" }];

const arrayOfIds = arrayOfObjects.map(data => data.id);

console.log(arrayOfIds);*/

  useEffect(() => {
    const url = "/api/upload";
    const fetchData = async () => {

 
      try {
        const response = await fetch(url);
        const json = await response.json()
        console.log(json);
        const uuid = v4();
        console.log("res")
      todo.year && todo.sujet && set(Ref(db, `/sujets/${todo.year}/${uuid}/`), {
          ...todo,
          sujet: json.url,
          uuid,
          id: currentId.id,
          downloadUrl: json.downloadUrl,
          time,
        })
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

 
  }, [uploaded])
 /* const [isFetched, setIsFetched] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  
  const imagesListRef = ref(storage, "sujets/");
  const uploadFile = () => {
    if (todo.sujet == null) return;
    const uuid = v4();
    const imageRef = ref(storage, `sujets/${todo.stage}/${todo.year}/${uuid}`);
    try{
      uploadBytes(imageRef, todo.sujet).then((snapshot) => {
        getDownloadURL(snapshot.ref)
        .then((url) => {
            set(Ref(db, `/sujets/${todo.year}/${uuid}/`), {
              ...todo,
              sujet: url,
              uuid
            })
            console.log("Uploaded to db.")
        });
      });
      console.log("Uploaded.")
    }catch(err){
      console.log(err)
    }};
/*
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);*/

/*
  const writeToDatabase = () =>{
   
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid
    })
    setTodo({})
  }
  useEffect(() => {
   onValue(Ref(db), (snapshot) => {
      const data = snapshot.value;
      if(data !== null){
        setTodos(snapshot.val())
      }else{
        console.log('empty for now')
      }
    })


  },[])*/
  const handleNameChange = (e) => {
    setTodo()
  }
  const handleYearChange = (e) => {
    setTodo(prev => ({
      ...prev,
      year: e.target.value,
    }))
    console.log(todo)
  }
  const handleSubjectChange = (e) => {
    setTodo(prev => ({
      ...prev,
      subject: e.target.value,
    }))
    
  }
  const handleDificilityChange = (e) => {
    setTodo(prev => ({
      ...prev,
      dificility: e.target.value,
    }))

  }
  const handleTypeChange = (e) => {
    setTodo(prev => ({
      ...prev,
      type: e.target.value,
    }))

  }
  
  const handleTirmChange = (e) => {
    setTodo(prev => ({
      ...prev,
      tirm: e.target.value,
    }))

  }
  const handleGradeChange = (e) => {
    setTodo(prev => ({
      ...prev,
      stage: e.target.value,
    }))
  }
  const handlSubjectYearChange = (e) => {
    setTodo(prev => ({
      ...prev,
      SubjectYear: e.target.value,
    }))
  }
  const pickedHandler = (e) => {
    let pickedFile;
      pickedFile = e.target.files[0];
      setTodo(prev => ({
        ...prev,
        sujet: pickedFile,
      }))
      
  };
  const handleDivisionChange = (e) => {

      setTodo(prev => ({
        ...prev,
        division:  e.target.value,
      }))
      
  };
  const handleTimeChange = (e) => {
    let val = e.target.value;
    if(val = "1"){
      setTime({
        hours:1,
        minutes: 0,
      })
    }else if(val = "1:30"){
      setTime({
        hours:1,
        minutes: 30,
      })
    }else if(val = "2"){
      setTime({
        hours:2,
        minutes: 0,
      })
    }
    time && setTodo(prev => ({
      ...prev,
      time,
    }))
  }

  return(
    <div>
      <button onClick={handleUpload}>submit</button>
      <select name="grade"  onChange={handleGradeChange}>
  <option value="Primary_school">Primary_school</option>
  <option value="Middle_school">Middle_school</option>
  <option value="High_school">High_school</option>
  </select>
{todo.stage === "Primary_school" && <select name="Years"  onChange={handleYearChange}>
  <option value="1ap">1ap</option>
  <option value="2ap">2ap</option>
  <option value="3ap">3ap</option>
  <option value="4ap">4ap</option>
  <option value="1ap">5ap</option>
  <option value="2ap">SEC</option> </select>}
  {todo.stage === "Middle_school" &&
  <select name="Years"  onChange={handleYearChange}>
  <option value="3am">1ms</option>
  <option value="4am">2ms</option>
  <option value="1am">3ms</option>
  <option value="2am">4ms</option>
  <option value="bem">BEM</option> </select>}
  {todo.stage === "High_school" &&

  <select name="Years"  onChange={handleYearChange}>
  <option value="1as">1as</option>
  <option value="2as">2as</option>
  <option value="3as">3as</option>
  <option value="bac">BAC</option>

  </select>}

  <select name="Subjects"  onChange={handleSubjectChange}>
  <option value="Science">Science</option>
  <option value="Physics">Physics</option>
  <option value="Maths">Maths</option>
  <option value="History">History</option>
  </select>
  <select name="Tirm"  onChange={handleTirmChange}>
  <option value="First">First</option>
  <option value="Second">Second</option>
  <option value="Third">Third</option>
  </select>
  <select name="Dificility"  onChange={handleDificilityChange}>
  <option value="Easy">Easy</option>
  <option value="Mid">Mid</option>
  <option value="Hard">Hard</option>
  </select>
  <select name="Type"  onChange={handleTypeChange}>
  <option value="Exam">Exam</option>
  <option value="Test">Test</option>
  </select>
  <select name="Time" onChange={handleTimeChange}>
    <option value="1">1Hour</option>
    <option value="1:30">1:30</option>
    <option value="2">2Hours</option>
  </select>
  <select name="Division" onChange={handleDivisionChange}>
    <option value="TCST">TCST</option>
    <option value="TCL">TCL</option>
    <option value="technicalathlete">technical athlete</option>
    <option value="practicalscience">practical science</option>
    <option value="mathematicsdivision">mathematics division</option>
    <option value="managementandeconomy">management and economy</option>
    <option value="offoreignlanguages">off oreign languages</option>
    <option value="literatureandphilosophy">literature and philosophy</option>
  </select>
  <input type={"text"} value={year} onChange={handlSubjectYearChange}/>
 <input
        id="imageInput"
        type="file"
        onChange={pickedHandler}
      />
      
    </div>
  )
}

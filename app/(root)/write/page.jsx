'use client'
import React, { useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import { slugify } from '@/utils/slugify';
import { redirect } from 'next/navigation';


const storage = getStorage(app);



const WritePage =  () => {


  const { status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null)
  const [media, setMedia] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    const upload = () => {
      const fileName = new Date().toISOString() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
  }, [file]);

  if (status === 'loading') return <div className='h1-bold'>Loading...</div>;
  if (status !== 'authenticated') {
    redirect('/');
  }


  const handelSubmit = async () => {
    const res = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
        image: media,
        slug: slugify(title),
      }),
    })
  }


  return (
    <>
      <div className='flex gap-10 justify-end wrapper'>
        <Drawer>
          <DrawerTrigger className=' bg-slate-200 px-3 rounded-md'>Add picture</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
              <input onChange={e => setFile(e.target.files[0])} className='mx-auto' type='file' />
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Done</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Button className='' onClick={handelSubmit}>Publish</Button>
      </div>

      <div className='wrapper'>
        <input
          type='text'
          placeholder='Title'
          className="px-10 border py-6 w-full focus:outline-none placeholder:italic bg-slate-200 text-2xl"
          onChange={e => setTitle(e.target.value)}
        />
        <ReactQuill theme='bubble' placeholder='Tell your story...' className='bg-slate-200 p-5 min-h-96' value={content} onChange={setContent} />
      </div>
    </>
  )
}

export default WritePage
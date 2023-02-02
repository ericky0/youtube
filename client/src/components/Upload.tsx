import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000c7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`
const Wrapper = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  background-color: ${({theme}) => theme.bgLighter};
  color: ${({theme}) => theme.text};
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  position: relative;
`
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`
const Title = styled.h1`
  text-align: center;
`
const Input = styled.input`
  border: 1px solid ${({theme}) => theme.soft};
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`
const Desc = styled.textarea`
  border: 1px solid ${({theme}) => theme.soft};
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({theme}) => theme.soft};
  color: ${({theme}) => theme.textSoft};
`
const Label = styled.label`
  font-size: 14px;
`

type uploadProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Upload = ({setOpen}: uploadProps) => {

  const [img, setImg] = useState<File>()
  const [video, setVideo] = useState<File>()
  const [title, setTitle] = useState<string>()
  const [desc, setDesc] = useState<string>()
  const [imgPerc, setImgPerc] = useState<number>(0)
  const [videoPerc, setVideoPerc] = useState<number>(0)
  const [tags, setTags] = useState<string[]>([])
  const [videoUrl, setVideoUrl] = useState<string>()
  const [imgUrl, setImgUrl] = useState<string>()
  
  const navigate = useNavigate()

  const addVideo = (e: React.ChangeEvent) => {
    let target = e.target as HTMLInputElement
    let file: File = (target.files as FileList)[0]
    setVideo(file)
  }

  const addImage = (e: React.ChangeEvent) => {
    let target = e.target as HTMLInputElement
    let file: File = (target.files as FileList)[0]
    setImg(file)
  }

  const handleTags = (e: React.ChangeEvent) => {
    let tags = e.target as HTMLInputElement
    let text = tags.value.split(',')
    setTags(text)
  }

  const uploadFile = (file: File, urlType: string) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === 'imgUrl' ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress))
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
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },  () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          urlType === 'imgUrl' ? setImgUrl(downloadURL) : setVideoUrl(downloadURL)
        });
      }
    )
  }

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const res = await axios.post('/videos', {title, desc, tags, videoUrl, imgUrl})
    setOpen(false)
    res.status === 200 && navigate(`/video/${res.data._id}`)
  }
  useEffect(() => {
    video && uploadFile(video, 'videoUrl')
  }, [video])

  useEffect(() => {
   img && uploadFile(img, 'imgUrl')
  }, [img]) 

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a New Video</Title>
        <Label>Video</Label>

        {       
          videoPerc > 0 ? ('Uploading ' + videoPerc + '%') :
          <Input type='file' 
          accept='video/*' 
          onChange={addVideo}></Input>
        }

        <Input type='text' 
        placeholder='Title' 
        name='title'
        onChange={(e: React.ChangeEvent) => {setTitle((e.target as HTMLInputElement).value)}}></Input>

        <Desc placeholder='Description' 
        rows={8} 
        name='desc'
        onChange={(e: React.ChangeEvent) => {setDesc((e.target as HTMLInputElement).value)}}></Desc>
        <Input type='text' 
        placeholder='Separate the tags with commas.' 
        onChange={handleTags}></Input>

        <Label>Image: </Label>

        { imgPerc > 0 ? ('Uploading ' + imgPerc + '%') :
          <Input type='file' 
          accept='image/*' 
          onChange={addImage}></Input>
        }

        

        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  )
}

export default Upload
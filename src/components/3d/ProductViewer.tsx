'use client'
import { useEffect } from 'react'
export default function ProductViewer({ src, poster }: {src:string; poster?:string}){
  useEffect(()=>{ import('@google/model-viewer') },[])
  return (
    <model-viewer src={src} poster={poster} camera-controls ar ar-modes="webxr scene-viewer quick-look" style={{width:'100%',height:'420px'}}></model-viewer>
  )
}

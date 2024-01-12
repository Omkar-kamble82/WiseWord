'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
import type { FileWithPath } from '@uploadthing/react'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'

type FileUploaderProps = {
    onFieldChange: (url: string) => void
    imageUrl: string
    setFiles: Dispatch<SetStateAction<File[]>>
}

export function FileUploader({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) {
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setFiles(acceptedFiles)
        onFieldChange(convertFileToUrl(acceptedFiles[0]))
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
    })

    return (
        <div
        {...getRootProps()}
        className="flex w-[300px] sm:w-[400px] justify-center item-center h-[250px] border-2 border-[#cfcece] cursor-pointer flex-col overflow-hidden rounded-xl bg-white">
        <input {...getInputProps()} className="cursor-pointer" />

        {imageUrl ? (
            <div className="w-[300px] sm:w-[400px] ">
            <img
                src={imageUrl}
                alt="image"
                width={240}
                height={250}
                className="w-full object-cover object-center"
            />
            </div>
        ) : (
            <div className="flex justify-center items-center flex-col w-[300px] mx-auto">
            <img src="/upload.svg" width={77} height={77} alt="file upload" />
            <h3 className="mb-2 mt-2 text-gray-400">Drag photo here</h3>
            <p className="p-medium-12 mb-4 text-gray-400">SVG, PNG, JPG</p>
            <Button type="button" className="rounded-full">
                Select from computer
            </Button>
            </div>
        )}
        </div>
    )
}
'use client'
import * as React from 'react'
import { Upload } from 'lucide-react'

const fileUploadComponent = () => {

    const handleFileUploadClk = () => {

        const element = document.createElement('input')
        element.setAttribute('type', 'file')
        element.setAttribute('accept', 'application/pdf')
        
        element.click()
    }
    return (
        <div className="bg-emerald-500 text-white flex justify-center items-center p-5 rounded-lg border-amber-50 border-1">
            <div onClick={handleFileUploadClk} className='flex justify-center items-center flex-col'>
                <h3>Upload PDF</h3>
                <Upload />

            </div>
        </div>
    )

}

export default fileUploadComponent
"use client"
import React from 'react'
import LogoTitle from './_components/LogoTitle'
import LogoDesc from './_components/LogoDesc'
import LogoPalette from './_components/LogoPalette'
import LogoDesign from './_components/LogoDesign'
import LogoIdea from './_components/LogoIdea'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

function CreateLogo() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    
    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return (
    
        <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
            {step==1?
            <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} />:
            step==2?
            <LogoDesc onHandleInputChange={(v) => onHandleInputChange('description', v)} />:
            step==3?
            <LogoPalette onHandleInputChange={(v) => onHandleInputChange('palette', v)} />:
            step==4?
            <LogoDesign onHandleInputChange={(v) => onHandleInputChange('design', v)} />:
            <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea', v)} />
}
            
            <div className='flex items-center justify-between mt-10'>
                {step !== 1 && (
                    <Button 
                        variant="outline" 
                        className='flex gap-1 bg-red-500 text-white hover:bg-red-600' 
                        size="lg" 
                        onClick={() => setStep(step - 1)}
                    >
                        <ArrowLeft/>Previous
                    </Button>
                )}
                <Button 
                    variant="outline" 
                    className='bg-red-500 text-white hover:bg-red-600 flex gap-1' 
                    size="lg" 
                    onClick={() => setStep(step + 1)}
                >
                    Next <ArrowRight/>
                </Button>
            </div>
        </div>
    )
}

export default CreateLogo
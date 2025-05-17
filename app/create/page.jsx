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

    console.log(formData);

    const handleNext = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    }

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    const renderStep = () => {
        switch(step) {
            case 1:
                return <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} />;
            case 2:
                return <LogoDesc onHandleInputChange={(v) => onHandleInputChange('description', v)} />;
            case 3:
                return <LogoPalette onHandleInputChange={(v) => onHandleInputChange('palette', v)} />;
            case 4:
                return <LogoDesign onHandleInputChange={(v) => onHandleInputChange('design', v)} />;
            case 5:
                return <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea', v)} />;
            default:
                return null;
        }
    }

    return (
        <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
            {renderStep()}
            
            <div className='flex items-center justify-between mt-10'>
                {step !== 1 && (
                    <Button 
                        variant="outline" 
                        className='flex gap-1 bg-red-500 text-white hover:bg-red-600' 
                        size="lg" 
                        onClick={handlePrevious}
                    >
                        <ArrowLeft/>Previous
                    </Button>
                )}
                <Button 
                    variant="outline" 
                    className='bg-red-500 text-white hover:bg-red-600 flex gap-1' 
                    size="lg" 
                    onClick={handleNext}
                >
                    Next <ArrowRight/>
                </Button>
            </div>
        </div>
    )
}

export default CreateLogo;
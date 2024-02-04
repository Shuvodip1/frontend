"use client"

import { Checkbox } from "@/components/ui/checkbox"
import React from 'react'

const CheckboxComponent = ({text}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {text}
      </label>
    </div>
  )
}

export default CheckboxComponent

import { ModeToggle } from '@/components/ui/toggle-mode'
import React from 'react'

const Settings = () => {
  return (
    <div className="p-12 flex flex-col gap-8">
      <h1 className='text-3xl'>Settings Page</h1>
      <div className="flex items-center">
        <label className="mr-5">Toggle Mode </label>
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Settings

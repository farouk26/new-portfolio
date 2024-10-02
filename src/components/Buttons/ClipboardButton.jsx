import React, { useState } from "react"
import { LuClipboardCheck } from "react-icons/lu"
import copy from "clipboard-copy"

function ClipboardButton({ text }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyClick = async () => {
    try {
      await copy(text)
      setTimeout(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000) // Reset state after 2 seconds
      }, 500) // Simulate loader for 1 second
    } catch (error) {
      console.error("Failed to copy text to clipboard", error)
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button onClick={handleCopyClick}>
        {isCopied ? (
          <div className="flex gap-2">
            <span className="text-md">Copied to clipboard</span>
            <LuClipboardCheck className="text-dark-200" />
          </div>
        ) : (
          "faroukwebdesign@gmail.com"
        )}
      </button>
    </div>
  )
}

export default ClipboardButton

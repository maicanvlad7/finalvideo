"use client"

import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Copy } from "lucide-react"
import { useToast } from "./ui/use-toast"
import { CheckCircle2 } from "lucide-react"

export default function ReferralLink() {
    const {toast} = useToast()
    const linkValue = "https://finalvideo.vercel.app?invite=GDR120"

    const copyLink = () => {
        navigator.clipboard.writeText(linkValue)
        toast({
            title: "Invite link copied",
            description: linkValue,
          })
    }

    return(
        <>
        <Label htmlFor="email">Referral Link</Label>
        <div className="flex max-w-sm w-full items-left space-x-2">
            <Input type="text" className="border-slate-400" disabled placeholder="finalvideo.vercel.app/invite?code=GBR123" />
            <Button
            onClick={copyLink}
            >
            <Copy className="w-4 h-4"></Copy>
            </Button>
        </div>
        </>
    )
}
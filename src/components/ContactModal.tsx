'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                        Send us a message
                    </DialogTitle>
                    <p className="text-center text-muted-foreground mt-2">
                        Got questions? Need to chat with an expert?
                    </p>
                </DialogHeader>
                <div className="flex flex-col gap-4 mt-4">
                    <Link href="/contact" onClick={onClose}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 rounded-lg border bg-card hover:bg-accent flex items-center gap-3"
                        >
                            <Mail className="h-5 w-5 text-red-600" />
                            <div>
                                <h3 className="font-semibold">
                                    Send us a message
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Get in touch with our team
                                </p>
                            </div>
                        </motion.div>
                    </Link>

                    <Link
                        href="https://maps.google.com/?q=Thulo Kharibot"
                        target="_blank"
                        onClick={onClose}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 rounded-lg border bg-card hover:bg-accent flex items-center gap-3"
                        >
                            <MapPin className="h-5 w-5 text-red-600" />
                            <div>
                                <h3 className="font-semibold">Come visit us</h3>
                                <p className="text-sm text-muted-foreground">
                                    Find us on the map
                                </p>
                            </div>
                        </motion.div>
                    </Link>

                    <a href="tel:702-518-0053">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 rounded-lg border bg-card hover:bg-accent flex items-center gap-3"
                        >
                            <Phone className="h-5 w-5 text-red-600" />
                            <div>
                                <h3 className="font-semibold">Call us</h3>
                                <p className="text-sm text-muted-foreground">
                                    702-518-0053
                                </p>
                            </div>
                        </motion.div>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    )
}

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface WhyChooseUsItemProps {
    icon: LucideIcon
    title: string
    description: string
}

export function WhyChooseUsItem({
    icon: Icon,
    title,
    description,
}: WhyChooseUsItemProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-background p-6 rounded-xl border shadow-sm"
        >
            <div className="flex gap-4">
                <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}

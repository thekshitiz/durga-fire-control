import { LucideIcon } from 'lucide-react'

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
        <div className="flex items-start space-x-3">
            <Icon
                className="h-5 w-5 text-primary mt-1 flex-shrink-0"
                aria-hidden="true"
            />
            <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}

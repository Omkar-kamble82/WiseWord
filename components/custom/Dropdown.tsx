import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    value: string
    onChangeHandler?: () => void
}

const Dropdown = (props: Props) => {
    return (
        <div className="relative z-[2]">
            <Select className="w-[100%]" onValueChange={props.onChangeHandler} defaultValues={props.value}>
                <SelectTrigger className="">
                    <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                    <SelectItem value="Art">Art</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Food">Food</SelectItem>
                    <SelectItem value="Cinema">Cinema</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default Dropdown
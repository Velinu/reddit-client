import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export function AddRedditDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
          <Button
            type="button"
            className="
              group relative inline-flex
              h-14 w-14
              items-center justify-center
              overflow-hidden
              rounded-full
              bg-linear-to-b from-amber-300 to-orange-600
              text-white
              shadow-md
              hover:cursor-pointer
              transition-all duration-300 ease-out
              hover:w-42
              hover:shadow-lg hover:shadow-orange-500
              focus-visible:ring-2 focus-visible:ring-orange-400
            "
          >
            <span
              className="
                absolute left-6
                whitespace-nowrap
                opacity-0
                font-bold
                -translate-x-4
                transition-all duration-200 ease-out
                group-hover:opacity-100
                group-hover:translate-x-0
              "
            >
              Add subreddit
            </span>

            <span className="absolute right-4 flex items-center justify-center font-bold">
              <Plus className='bold size-7' />
            </span>
          </Button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-b-xl rounded-t-none">
        <form className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Add Subreddit</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="username-1">Subreddit Name</Label>
              <Input id="username-1" name="subreddit" placeholder="Enter the name..." />
            </Field>
          </FieldGroup>
          <DialogFooter className="flex flex-col">
            <DialogClose asChild>
              <Button variant="secondary" className="text-white hover:shadow-lg bg-red-500 hover:shadow-red-500">Cancel</Button>
            </DialogClose>
            <Button type="submit" variant="default"
                    className="bg-linear-to-b
                    from-amber-300
                    to-orange-600
                    text-white
                    hover:shadow-lg
                    hover:shadow-orange-500">
              Add Subreddit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

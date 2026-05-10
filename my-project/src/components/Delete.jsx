"use client";

import { AlertDialog, Button } from "@heroui/react";
import { MdDelete } from "react-icons/md";
import { redirect, useRouter } from "next/navigation";
import { TrashBin } from "@gravity-ui/icons";

export function Delete({ id, destinationName }) {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:5000/destination/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                console.log("Deleted successfully");
                router.push("/destinations");
                router.refresh();
            } else {
                alert("Failed to delete the destination");
            }
        } catch (error) {
            console.error("Error deleting:", error);
        }
        redirect('/destinations')
    };

    return (
        <AlertDialog>
            <AlertDialog.Trigger>
                <Button
                    variant="outline"
                    size="sm"
                    startContent={<MdDelete size={14} />}
                    className="rounded-md border-red-400 text-red-500 text-sm font-medium hover:bg-red-50"
                >
                    <TrashBin />  Delete
                </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
import CustomCard from "@/components/Card";
import Link from "next/link";

export default function archived() {
    return (
        <CustomCard>
            Archived Notifications
            <Link href='/dashboard'>latest Notifications</Link>
        </CustomCard>
    )
}
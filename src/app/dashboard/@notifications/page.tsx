import CustomCard from "@/components/Card";
import Link from "next/link";

export default  function Notifications() {
    return (
        <CustomCard>
            Notifications
            <Link href='/dashboard/archived'>View old notifications</Link>
        </CustomCard>
    )
}
import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <Image
                src="/logo2.png"
                alt="logo"
                width={100}
                height={100}
            />
        </footer>
    )
}
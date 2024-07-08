import Link from "next/link";

const mockUrls = [
    'https://utfs.io/f/ac6727bf-0374-4c8f-8085-eeb5917f6e07-tk0933.png',
    'https://utfs.io/f/5275cf01-abf2-4cd0-b3a1-7e00a2c7513d-2tno26.png',
    'https://utfs.io/f/84e13b1d-746d-4b45-9bf2-def2f4217718-v2srne.png',
    'https://utfs.io/f/2a3c158b-ca06-4272-b730-8af89ac383ef-6ktaa6.png'
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
}));

export default function HomePage() {
  return (
    <main>
        <div className="flex flex-wrap gap-4">
            {[...mockImages, ...mockImages, ...mockImages].map((image) => {
                return (
                    <div key={image.id} className="w-48">
                        <img src={image.url} alt="Image"/>
                    </div>
                )
            })}
        </div>
    </main>
  );
}

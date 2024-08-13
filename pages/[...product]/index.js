// components/ProductPage.js
import { useEffect, useState } from 'react';
import { useShoppingCartContext } from '@/contexts/CartContext';
import { mongooseConnect } from '@/lib/mongoose';
import Product from '@/models/products';
import { useRouter } from 'next/router';
import { CldImage } from 'next-cloudinary';

const extractPublicId = (url) => {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    const publicIdWithFormat = pathParts.pop();
    const publicId = publicIdWithFormat.split('.')[0]; // Extract public ID
    return publicId;
};

const ProductPage = ({ product }) => {
    const { addItem } = useShoppingCartContext();
    const [selectedImage, setSelectedImage] = useState()

    useEffect(() => {
        if (window.cloudinary && window.cloudinary.galleryWidget) {
            console.log('Atii')
            // Convert image URLs to public IDs
            const mediaAssets = product.images.map(url => ({ publicId: extractPublicId(url) }));
            console.log(mediaAssets)

            // Initialize the Cloudinary gallery widget
            window.cloudinary.galleryWidget({
                container: "#product-gallery", // ID of the container element
                cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
                mediaAssets: mediaAssets,
                carouselStyle: "thumbnails", // Customize as needed
                themeProps: {
                    backgroundColor: "#ffffff",
                },
                // Additional configuration options can be added here
            });
        }
    }, [product]);

    const handleClick = (product) => {
        addItem(product);
    };
    const extractPublicId = (url) => {
        // Parse the URL to extract the public ID
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/');
        const publicIdWithFormat = pathParts.pop();
        const publicId = publicIdWithFormat.split('.')[0]; // Extract public ID
        return publicId;
    }
    const handleChange = (Id) => {
        setSelectedImage(Id);

    }
    const publicIds = product.images.map(url => extractPublicId(url))

    useEffect(() => {
        setSelectedImage(publicIds[0])


    }, [])


    return (
        <div className="bg-gray-100 py-8">
            <div class="">
                <div class="p-4 max-w-6xl max-md:max-w-xl mx-auto">
                    <div class="grid items-start grid-cols-1 md:grid-cols-2 gap-6">

                        <div class="w-full lg:sticky top-0 flex flex-col md:flex-row gap-3">
                            <CldImage
                                src={selectedImage ? selectedImage : publicIds[0]}
                                alt={product.title}
                                width={400}  // Specify desired width
                                height={600} // Specify desired height
                                crop="fill" // Adjust cropping as needed
                                quality="auto" // Automatic quality
                                format="auto" // Automatic format
                                className="rounded "
                            />

                            <div class="w-20 flex md:flex-col  gap-3">
                                {
                                    publicIds && publicIds.map((publicId) => (
                                        <CldImage
                                            onClick={() => { setSelectedImage(publicId) }}
                                            src={publicId}
                                            alt={product.title}
                                            width={500}  // Specify desired width
                                            height={640} // Specify desired height
                                            crop="fill" // Adjust cropping as needed
                                            quality="auto" // Automatic quality
                                            format="auto" // Automatic format
                                            className="rounded hove:ring"
                                        />



                                    ))
                                }


                            </div>
                        </div>

                        <div>
                            <h2 class="text-2xl max-sm:text-2xl font-bold text-gray-800">{product && product.title}</h2>
                            <div class="mt-8">
                                <h3 class="text-gray-800 text-4xl max-sm:text-3xl font-bold">Ksh {product && product.price}</h3>
                            </div>





                            <div class="mt-10 flex flex-wrap gap-4">
                                <button onClick={() => { addItem(product) }} type="button" class="flex items-center w-full justify-center px-8 py-4 bg-slate-950 hover:bg-gray-900 text-white border border-gray-800 text-base rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 cursor-pointer fill-current inline mr-3" viewBox="0 0 512 512">
                                        <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000"></path>
                                    </svg>
                                    Add to cart
                                </button>


                            </div>

                            <ul class="grid grid-cols-2 mt-10">
                                <li
                                    class="text-gray-800 font-semibold text-base text-center bg-gray-50 py-3 px-4 border-b-2 border-gray-800 cursor-pointer">
                                    Details</li>
                                <li class="text-gray-800 font-semibold text-base text-center py-3 border-b-2 px-4 cursor-pointer">
                                    Description</li>
                            </ul>

                            <ul class="space-y-3 list-disc pl-4 text-sm text-gray-600 mt-8">
                                {product && product.description}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

export async function getServerSideProps(context) {
    await mongooseConnect();

    const { product } = context.query;
    const id = product[1];

    try {
        const product = await Product.findById(id).lean(); // Convert Mongoose document to plain JavaScript object

        return {
            props: {
                product: JSON.parse(JSON.stringify(product))
            }
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                product: null
            }
        };
    }
}

import React from 'react'
import CollectionPage from "../../../pages/CollectionPage"
import { useRouter } from 'next/router';

export default function index() {
    const router = useRouter();
    const { collectionName } = router.query;
    const { query } = router;
    const { test } = query;
    const dynamicPart = test ? test.toString() : '';
    console.log(dynamicPart)

    return <CollectionPage collectionName={collectionName} dynamicPart={dynamicPart} />;
}

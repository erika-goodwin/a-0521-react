import SHOP_DATA from 'assets/data/shop'
import DIRECTORY from 'assets/data/directory'
import {addCollectionAndDocuments, addDirectoryDocuments} from './firebase.helper'

export const addShop = () => addCollectionAndDocuments('collections', SHOP_DATA )
export const addDirectory = () => addDirectoryDocuments('directory', DIRECTORY )
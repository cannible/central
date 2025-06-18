import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
/* wwFront:start */
import pluginf5856798485d47beb433d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/ww-config.js';
import plugin832d6f7a42c343f1a3ce9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/ww-config.js';
import plugincd33cf33e29f4e8cac26b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/ww-config.js';
import plugin2bd1c68831c5443eae2559aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/ww-config.js';
import plugin2adce8d52056479da21a068f55a8077f from '@/components/plugins/plugin-2adce8d5-2056-479d-a21a-068f55a8077f/ww-config.js';
import plugin9c40819b4a8f468f9ba54b9699f3361f from '@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/ww-config.js';
import section99586bd32b154d6ba0256a50d07ca845 from '@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js';
import sectionef0ecc719a594eab94b0b36d66d3d61d from '@/components/sections/section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d/ww-config.js';
import wwobject1d0468f84d3346fb9c58b3742aa7d55a from '@/components/elements/element-1d0468f8-4d33-46fb-9c58-b3742aa7d55a/ww-config.js';
import wwobjectaf811adf94d949ddab22e2f29ae30299 from '@/components/elements/element-af811adf-94d9-49dd-ab22-e2f29ae30299/ww-config.js';
import wwobject21881619a984484781a9922c3dbb5853 from '@/components/elements/element-21881619-a984-4847-81a9-922c3dbb5853/ww-config.js';
import wwobject6ba133b6a444414f93a525cd237dd398 from '@/components/elements/element-6ba133b6-a444-414f-93a5-25cd237dd398/ww-config.js';
import wwobject70a5385853ca40a5ad88c1cd33b5cc9f from '@/components/elements/element-70a53858-53ca-40a5-ad88-c1cd33b5cc9f/ww-config.js';
import wwobjecta6cb6a4d6af74cd6b530a15d9ec64488 from '@/components/elements/element-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488/ww-config.js';
import wwobject0dc461bb103e4b2e80e0846ec3c30a6e from '@/components/elements/element-0dc461bb-103e-4b2e-80e0-846ec3c30a6e/ww-config.js';
import wwobject0d3e75d19e7744cba2728b0825fbc5da from '@/components/elements/element-0d3e75d1-9e77-44cb-a272-8b0825fbc5da/ww-config.js';
import wwobject69d0b3efb265494c8cd1874da4aa1834 from '@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js';
import wwobject83d890fb84f94386b459fb4be89a8e15 from '@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js';
import wwobject6f8796b18273498d95fc7013b7c63214 from '@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js';
import wwobject73a13effbdc74021bdc6413c97fe91c1 from '@/components/elements/element-73a13eff-bdc7-4021-bdc6-413c97fe91c1/ww-config.js';
import wwobject9256b033f4e84ab4adcedac3a940d7f5 from '@/components/elements/element-9256b033-f4e8-4ab4-adce-dac3a940d7f5/ww-config.js';
import wwobject6346ba5b58f640edb86bf29551236735 from '@/components/elements/element-6346ba5b-58f6-40ed-b86b-f29551236735/ww-config.js';
import wwobject9ecb2cfccef74be8b7363e17a3b7e9ff from '@/components/elements/element-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff/ww-config.js';
import wwobjectd7904e9dfc9a4d809e32728e097879ad from '@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js';
import wwobjectaa27b26f06864c2998c58217044045b7 from '@/components/elements/element-aa27b26f-0686-4c29-98c5-8217044045b7/ww-config.js';
import wwobject3a7d637912d3438798ffb332bb492a63 from '@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js';
import wwobjectb783dc65d5284f748c14e27c934c39b1 from '@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js';
import wwobject14723a2101784d92a7e9d1dfeaec29a7 from '@/components/elements/element-14723a21-0178-4d92-a7e9-d1dfeaec29a7/ww-config.js';
import wwobjectf4c24d06bc884b62add34d1f8b42221c from '@/components/elements/element-f4c24d06-bc88-4b62-add3-4d1f8b42221c/ww-config.js';
import wwobject57831abf83ad49adba973bd30b035710 from '@/components/elements/element-57831abf-83ad-49ad-ba97-3bd30b035710/ww-config.js';
import wwobjecta4a2089fb75d4e269c990d67fb7bd3cd from '@/components/elements/element-a4a2089f-b75d-4e26-9c99-0d67fb7bd3cd/ww-config.js';
import wwobject985570fcb3c04566800482ab3b30a11d from '@/components/elements/element-985570fc-b3c0-4566-8004-82ab3b30a11d/ww-config.js';
import wwobject5a88036f22ea4f8db4a5bc226ef95061 from '@/components/elements/element-5a88036f-22ea-4f8d-b4a5-bc226ef95061/ww-config.js';
import wwobject6d692ca26cdc4805aa0c211102f335d0 from '@/components/elements/element-6d692ca2-6cdc-4805-aa0c-211102f335d0/ww-config.js';
import wwobject1b1e21739b7842cca8eea6167caea340 from '@/components/elements/element-1b1e2173-9b78-42cc-a8ee-a6167caea340/ww-config.js';
import wwobject25edb26fa36544478de54964f9f7dc77 from '@/components/elements/element-25edb26f-a365-4447-8de5-4964f9f7dc77/ww-config.js';
import wwobjecta36eacfa16af4363858da03177f211d4 from '@/components/elements/element-a36eacfa-16af-4363-858d-a03177f211d4/ww-config.js';
import wwobjecte73cfc0e2d1940d3963c3f5ac8dc39bd from '@/components/elements/element-e73cfc0e-2d19-40d3-963c-3f5ac8dc39bd/ww-config.js';
import wwobject6047b8df81b745a7a6b37355fb2fa3cd from '@/components/elements/element-6047b8df-81b7-45a7-a6b3-7355fb2fa3cd/ww-config.js';
import wwobject59dca300db7842e4a7a60cbf22d3cc82 from '@/components/elements/element-59dca300-db78-42e4-a7a6-0cbf22d3cc82/ww-config.js';
import wwobject1ba25bdfdee94e0ea0b8b3f3128c3b65 from '@/components/elements/element-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65/ww-config.js';
import wwobjectdeb10a015eef4aa190171b51c2ad6fd0 from '@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js';
/* wwFront:end */

export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-f5856798-485d-47be-b433-d43d771c64e1': getInheritedConfiguration({ ...pluginf5856798485d47beb433d43d771c64e1, name: 'plugin-f5856798-485d-47be-b433-d43d771c64e1' }),
'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811': getInheritedConfiguration({ ...plugin832d6f7a42c343f1a3ce9a678272f811, name: 'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811' }),
'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7': getInheritedConfiguration({ ...plugincd33cf33e29f4e8cac26b997fe507ce7, name: 'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7' }),
'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb': getInheritedConfiguration({ ...plugin2bd1c68831c5443eae2559aa5b6431fb, name: 'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb' }),
'plugin-2adce8d5-2056-479d-a21a-068f55a8077f': getInheritedConfiguration({ ...plugin2adce8d52056479da21a068f55a8077f, name: 'plugin-2adce8d5-2056-479d-a21a-068f55a8077f' }),
'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f': getInheritedConfiguration({ ...plugin9c40819b4a8f468f9ba54b9699f3361f, name: 'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...section99586bd32b154d6ba0256a50d07ca845, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d': getInheritedConfiguration({ ...sectionef0ecc719a594eab94b0b36d66d3d61d, name: 'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d' }),
'wwobject-1d0468f8-4d33-46fb-9c58-b3742aa7d55a': getInheritedConfiguration({ ...wwobject1d0468f84d3346fb9c58b3742aa7d55a, name: 'wwobject-1d0468f8-4d33-46fb-9c58-b3742aa7d55a' }),
'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299': getInheritedConfiguration({ ...wwobjectaf811adf94d949ddab22e2f29ae30299, name: 'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299' }),
'wwobject-21881619-a984-4847-81a9-922c3dbb5853': getInheritedConfiguration({ ...wwobject21881619a984484781a9922c3dbb5853, name: 'wwobject-21881619-a984-4847-81a9-922c3dbb5853' }),
'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398': getInheritedConfiguration({ ...wwobject6ba133b6a444414f93a525cd237dd398, name: 'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398' }),
'wwobject-70a53858-53ca-40a5-ad88-c1cd33b5cc9f': getInheritedConfiguration({ ...wwobject70a5385853ca40a5ad88c1cd33b5cc9f, name: 'wwobject-70a53858-53ca-40a5-ad88-c1cd33b5cc9f' }),
'wwobject-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488': getInheritedConfiguration({ ...wwobjecta6cb6a4d6af74cd6b530a15d9ec64488, name: 'wwobject-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488' }),
'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e': getInheritedConfiguration({ ...wwobject0dc461bb103e4b2e80e0846ec3c30a6e, name: 'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e' }),
'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da': getInheritedConfiguration({ ...wwobject0d3e75d19e7744cba2728b0825fbc5da, name: 'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...wwobject69d0b3efb265494c8cd1874da4aa1834, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...wwobject83d890fb84f94386b459fb4be89a8e15, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...wwobject6f8796b18273498d95fc7013b7c63214, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-73a13eff-bdc7-4021-bdc6-413c97fe91c1': getInheritedConfiguration({ ...wwobject73a13effbdc74021bdc6413c97fe91c1, name: 'wwobject-73a13eff-bdc7-4021-bdc6-413c97fe91c1' }),
'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5': getInheritedConfiguration({ ...wwobject9256b033f4e84ab4adcedac3a940d7f5, name: 'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5' }),
'wwobject-6346ba5b-58f6-40ed-b86b-f29551236735': getInheritedConfiguration({ ...wwobject6346ba5b58f640edb86bf29551236735, name: 'wwobject-6346ba5b-58f6-40ed-b86b-f29551236735' }),
'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff': getInheritedConfiguration({ ...wwobject9ecb2cfccef74be8b7363e17a3b7e9ff, name: 'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...wwobjectd7904e9dfc9a4d809e32728e097879ad, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7': getInheritedConfiguration({ ...wwobjectaa27b26f06864c2998c58217044045b7, name: 'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...wwobject3a7d637912d3438798ffb332bb492a63, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...wwobjectb783dc65d5284f748c14e27c934c39b1, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-14723a21-0178-4d92-a7e9-d1dfeaec29a7': getInheritedConfiguration({ ...wwobject14723a2101784d92a7e9d1dfeaec29a7, name: 'wwobject-14723a21-0178-4d92-a7e9-d1dfeaec29a7' }),
'wwobject-f4c24d06-bc88-4b62-add3-4d1f8b42221c': getInheritedConfiguration({ ...wwobjectf4c24d06bc884b62add34d1f8b42221c, name: 'wwobject-f4c24d06-bc88-4b62-add3-4d1f8b42221c' }),
'wwobject-57831abf-83ad-49ad-ba97-3bd30b035710': getInheritedConfiguration({ ...wwobject57831abf83ad49adba973bd30b035710, name: 'wwobject-57831abf-83ad-49ad-ba97-3bd30b035710' }),
'wwobject-a4a2089f-b75d-4e26-9c99-0d67fb7bd3cd': getInheritedConfiguration({ ...wwobjecta4a2089fb75d4e269c990d67fb7bd3cd, name: 'wwobject-a4a2089f-b75d-4e26-9c99-0d67fb7bd3cd' }),
'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d': getInheritedConfiguration({ ...wwobject985570fcb3c04566800482ab3b30a11d, name: 'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d' }),
'wwobject-5a88036f-22ea-4f8d-b4a5-bc226ef95061': getInheritedConfiguration({ ...wwobject5a88036f22ea4f8db4a5bc226ef95061, name: 'wwobject-5a88036f-22ea-4f8d-b4a5-bc226ef95061' }),
'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0': getInheritedConfiguration({ ...wwobject6d692ca26cdc4805aa0c211102f335d0, name: 'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0' }),
'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340': getInheritedConfiguration({ ...wwobject1b1e21739b7842cca8eea6167caea340, name: 'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340' }),
'wwobject-25edb26f-a365-4447-8de5-4964f9f7dc77': getInheritedConfiguration({ ...wwobject25edb26fa36544478de54964f9f7dc77, name: 'wwobject-25edb26f-a365-4447-8de5-4964f9f7dc77' }),
'wwobject-a36eacfa-16af-4363-858d-a03177f211d4': getInheritedConfiguration({ ...wwobjecta36eacfa16af4363858da03177f211d4, name: 'wwobject-a36eacfa-16af-4363-858d-a03177f211d4' }),
'wwobject-e73cfc0e-2d19-40d3-963c-3f5ac8dc39bd': getInheritedConfiguration({ ...wwobjecte73cfc0e2d1940d3963c3f5ac8dc39bd, name: 'wwobject-e73cfc0e-2d19-40d3-963c-3f5ac8dc39bd' }),
'wwobject-6047b8df-81b7-45a7-a6b3-7355fb2fa3cd': getInheritedConfiguration({ ...wwobject6047b8df81b745a7a6b37355fb2fa3cd, name: 'wwobject-6047b8df-81b7-45a7-a6b3-7355fb2fa3cd' }),
'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82': getInheritedConfiguration({ ...wwobject59dca300db7842e4a7a60cbf22d3cc82, name: 'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82' }),
'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65': getInheritedConfiguration({ ...wwobject1ba25bdfdee94e0ea0b8b3f3128c3b65, name: 'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...wwobjectdeb10a015eef4aa190171b51c2ad6fd0, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});

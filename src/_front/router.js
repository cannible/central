import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"f20cdf03-4668-4cdb-9ee5-5f520f7ef19b","homePageId":"2a290865-1a42-4002-ba91-af4d814ac205","authPluginId":"f5856798-485d-47be-b433-d43d771c64e1","baseTag":{},"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{"backgroundColor":"#090A21"},"workflows":[],"pages":[{"id":"1fbc5f6b-8dc6-4f47-b8f7-3c4cc5641609","linkId":"1fbc5f6b-8dc6-4f47-b8f7-3c4cc5641609","name":"APPCONFIG","folder":"Backoffice/","paths":{"en":"b/app-configoij","default":"b/app-configoij"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"644be60f-8448-4e90-bf57-ea5aaa09e691","sectionTitle":"Header Section","linkId":"45892792-fb0b-4575-9bf8-b4336da7eb64"},{"uid":"6cdcb7f6-7e7d-47a3-a28a-517fa0b6bcf1","sectionTitle":"Main Content","linkId":"a0f7eec4-af35-48a5-b0d0-2dc1b7100684"},{"uid":"1752ac43-8094-4add-91d2-6995b82407b4","sectionTitle":"Loading Overlay Section","linkId":"5dbe3cbf-d219-472c-b1b3-3aea7c57fb89"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d7027ab9-ceb7-4e66-8bb3-9aaaf3fccf40","linkId":"d7027ab9-ceb7-4e66-8bb3-9aaaf3fccf40","name":"App Configuration","folder":"Backoffice/","paths":{"en":"b/app-configuration","default":"b/app-configuration"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"5ec2f524-f1c3-40b5-a11a-e208d2c6b974","sectionTitle":"bottomsheet","linkId":"e6a1230f-3c91-465b-ad6a-ab91ef0d34b7"},{"uid":"af4562b8-6148-4223-8dfe-c3d1cc207a0a","sectionTitle":"bottomsheet-integration-config","linkId":"af2fbabe-a8ce-4f31-bde6-ac75d0bd1382"},{"uid":"8d19d4f7-2364-4f8f-b9e3-b9aa18649847","sectionTitle":"backoffice","linkId":"8a86f8ee-4032-4cd3-b7c7-e20e1ab0fcb6"}],"pageUserGroups":[],"title":{"en":"Cannible","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Discover the right cannabis products for you"},"keywords":{"en":"cannabis, marketplace, search"},"__typename":"PageMeta","socialDesc":{},"socialTitle":{}},"metaImage":""},{"id":"78a59755-f2ca-4327-9866-6e0d2a664938","linkId":"78a59755-f2ca-4327-9866-6e0d2a664938","name":"Apps","folder":"Backoffice/","paths":{"en":"b/apps","default":"b/apps"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"5ec2f524-f1c3-40b5-a11a-e208d2c6b974","sectionTitle":"bottomsheet","linkId":"e6a1230f-3c91-465b-ad6a-ab91ef0d34b7"},{"uid":"af4562b8-6148-4223-8dfe-c3d1cc207a0a","sectionTitle":"bottomsheet-integration-config","linkId":"af2fbabe-a8ce-4f31-bde6-ac75d0bd1382"},{"uid":"98c7d7c3-d133-4c66-970c-697498af7439","sectionTitle":"actionBar","linkId":"8ad49fd1-916c-41dd-9c59-3b3179f0e54a"},{"uid":"8d19d4f7-2364-4f8f-b9e3-b9aa18649847","sectionTitle":"backoffice","linkId":"8a86f8ee-4032-4cd3-b7c7-e20e1ab0fcb6"}],"pageUserGroups":[],"title":{"en":"Cannible","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Discover the right cannabis products for you"},"keywords":{"en":"cannabis, marketplace, search"},"__typename":"PageMeta","socialDesc":{},"socialTitle":{}},"metaImage":""},{"id":"3b528c42-00db-468a-a1af-02ef172df03e","linkId":"3b528c42-00db-468a-a1af-02ef172df03e","name":"Settings","folder":"Backoffice/","paths":{"en":"backoffice/settings","default":"backoffice/settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"14768808-ddda-45d0-8967-18dea9d50f20","sectionTitle":"Sidebar Section","linkId":"597d665b-6d75-43c0-80f2-d5c7387cea25"},{"uid":"52095fbf-70da-472e-9ab4-031d0b872a7e","sectionTitle":"Main Content Section","linkId":"411c2414-c5da-45d7-941f-a958db07e570"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"73806520-ef83-495e-a155-31f8b4a3c7aa","linkId":"73806520-ef83-495e-a155-31f8b4a3c7aa","name":"SUBPAGE TEMPLATE","folder":"STAGING/","paths":{"en":"page","default":"page"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"55a96430-8411-4c2a-97ec-105626e54847","sectionTitle":"actionSheet-account","linkId":"e4b0600a-26f9-49e6-af87-d4c7602028ad"},{"uid":"1b414788-380d-4c98-aa45-26796f0c01b7","sectionTitle":"central","linkId":"970d49e7-b76f-4a65-897a-12f05a2ff032"}],"pageUserGroups":[{}],"title":{"en":"Cannible","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Discover the right cannabis products for you"},"keywords":{"en":"cannabis, marketplace, search"},"__typename":"PageMeta","socialDesc":{},"socialTitle":{}},"metaImage":""},{"id":"69031977-04f1-4c50-a73c-87c6adfe45f9","linkId":"69031977-04f1-4c50-a73c-87c6adfe45f9","name":"Access (copy)","folder":"12AM/","paths":{"en":"access-copy","default":"access-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"0ab1fdb9-7be9-4923-b6a7-e2da5f36ff40","sectionTitle":"log in","linkId":"5f317be2-867c-4ca6-b9a5-de030a3adb22"},{"uid":"52319f6a-7154-46af-88eb-a7402a5113a7","sectionTitle":"actionBar","linkId":"76012738-62c9-4f1c-9cdf-cd2c511b7a01"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d0b2807f-ec81-4c7c-bda4-c3510c833523","linkId":"d0b2807f-ec81-4c7c-bda4-c3510c833523","name":"Terms of Use","folder":"Legal/","paths":{"en":"terms","default":"terms"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"3fa96d9a-3eea-49a5-abb7-6c9605c74852","sectionTitle":"actionSheet-account","linkId":"fa91f668-f676-47be-8ad0-02ce6d9b3f53"},{"uid":"6d74fa84-e04b-46b8-8416-ddd933645d7b","sectionTitle":"central","linkId":"843d10ba-de95-46fb-868b-31a02d6ffee2"}],"pageUserGroups":[],"title":{"en":"Cannible","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Discover the right cannabis products for you"},"keywords":{"en":"cannabis, marketplace, search"},"__typename":"PageMeta","socialDesc":{},"socialTitle":{}},"metaImage":""},{"id":"0e55f916-d2ad-46f7-abef-2f035bbfe9b9","linkId":"0e55f916-d2ad-46f7-abef-2f035bbfe9b9","name":"Shop","folder":"DEFIANCE/","paths":{"en":"shop","default":"shop"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"53652b8a-c2bc-48d5-bf8a-189feca76e4c","sectionTitle":"shop","linkId":"b53263bc-10e4-4f9d-bdcb-b7df8c9a71c9"},{"uid":"5e3a48db-4d40-46db-bb98-6df85c739555","sectionTitle":"glass loader","linkId":"c683dcff-5cff-427f-b7fc-a81f989925ba"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"511128eb-999c-4fcb-a2f0-e088f25501d5","linkId":"511128eb-999c-4fcb-a2f0-e088f25501d5","name":"Welcome","folder":"STAGING/","paths":{"en":"welcome-copy","default":"welcome-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"adc5bd71-bcf4-45e5-82d9-49e51298d79b","sectionTitle":"search_modal","linkId":"8a407efd-2f8c-44a9-8406-aadc2067fda3"},{"uid":"9a7b6c3c-ff69-48f5-813a-e42b886015ee","sectionTitle":"actionSheet-game","linkId":"c2aac634-2f00-4895-a3bb-e473819f25a9"},{"uid":"c2101fee-9609-4904-988d-0272ace934bc","sectionTitle":"actionSheet-login","linkId":"bcde9fc6-b18a-423c-8096-5505bc7759a0"},{"uid":"6cfaa711-5404-47c1-aa65-1e2001a5df74","sectionTitle":"actionSheet-ageVerif","linkId":"f81d54de-3e02-4161-b9b3-eed20d7dd361"},{"uid":"cef5db86-ab3d-4324-8cf2-0a14160ff9ba","sectionTitle":"actionSheet-IDverif","linkId":"b7fcfdf6-613e-460a-99ea-b243f33cb70f"},{"uid":"57cc10c9-07f4-4f89-ac9c-b1974eca0ba7","sectionTitle":"central","linkId":"e58037d8-f1ad-411f-8d27-c6059d1fb9f8"}],"pageUserGroups":[{}],"title":{"en":"Cannible","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Discover the right cannabis products for you"},"keywords":{"en":"cannabis, marketplace, search"},"__typename":"PageMeta","socialDesc":{},"socialTitle":{}},"metaImage":""},{"id":"6e9dc062-d6af-4b4c-88b0-015df70e60fd","linkId":"6e9dc062-d6af-4b4c-88b0-015df70e60fd","name":"Account Creation","folder":"STAGING/","paths":{"en":"account-creation","default":"account-creation"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d641bdca-8364-4c16-a82a-d495fe99e972","sectionTitle":"section","linkId":"26285476-9823-4ce9-9c75-429212541ff8"},{"uid":"f29f6700-fd41-4f0e-ad4f-c76985beb8af","sectionTitle":"sign up modal","linkId":"6bad2392-54cd-444c-8aaa-1e154eb493b1"}],"pageUserGroups":[{}],"title":{"en":"Cannible | Members Only Cannabis","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Cannible is a personalized cannabis marketplace that helps you find the best stuff based on your preferences from any dispensary anywhere. \n"},"keywords":{"en":"cannabis, marketplace, delivery, pickup"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/opengraph-202202.png?_wwcv=406"},{"id":"e2578f32-37a3-4153-89c2-76deefa01ed2","linkId":"e2578f32-37a3-4153-89c2-76deefa01ed2","name":"Verify ID","folder":"STAGING/","paths":{"en":"verify","default":"verify"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"33f9d858-6a7b-4b4b-beb7-3f87d6241670","sectionTitle":"Verification - User","linkId":"3b455716-cd06-4396-87bb-5db16d7d1486"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a28bb23a-b2e6-4c12-bf9d-85ab526c960e","linkId":"a28bb23a-b2e6-4c12-bf9d-85ab526c960e","name":"Treez Approval Portal","folder":"Integrations/","paths":{"en":"treez-approval-portal","default":"treez-approval-portal"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f1747796-b8d9-4d59-8dee-d0477e6e841c","sectionTitle":"Verification - User","linkId":"9b1e714c-e962-4840-8177-b594d333e8be"},{"uid":"5b45cbf4-5101-49a7-a887-111365306ba0","sectionTitle":"Modal","linkId":"85d6ae8c-e61a-409b-96a3-31a2e9250449"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cdd0fd14-0291-48ee-b784-9627f75e2703","linkId":"cdd0fd14-0291-48ee-b784-9627f75e2703","name":"Create Account","folder":"STAGING/","paths":{"en":"create-account","default":"create-account"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"135322ec-203c-4e3a-94d0-febcb8d049a3","sectionTitle":"section","linkId":"ca2d1dd8-2edf-4270-bbdf-b5e8e2436203"},{"uid":"a2e62c83-c843-4f2a-93be-8c9ed47252a7","sectionTitle":"sign up modal","linkId":"bab9f1b5-8054-48b0-86dd-616cae67eacc"}],"pageUserGroups":[{}],"title":{"en":"Cannible | Members Only Cannabis","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Cannible is a personalized cannabis marketplace that helps you find the best stuff based on your preferences from any dispensary anywhere. \n"},"keywords":{"en":"cannabis, marketplace, delivery, pickup"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/opengraph-202202.png?_wwcv=406"},{"id":"b31d403d-94bd-4f0b-94dc-11adce44b5c0","linkId":"b31d403d-94bd-4f0b-94dc-11adce44b5c0","name":"Privacy Policy","folder":"Legal/","paths":{"en":"privacy","default":"privacy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"9a5c1230-33d1-48af-9c57-bdc50f2c1c74","sectionTitle":"actionSheet-account","linkId":"83ee45bd-d0a7-4ff2-9416-264910e342da"},{"uid":"37d150d3-768a-4885-870b-2405b4c08105","sectionTitle":"central","linkId":"0d1060f9-0577-4e79-81a0-a71f4ef7340e"}],"pageUserGroups":[],"title":{"en":"Cannible","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Discover the right cannabis products for you"},"keywords":{"en":"cannabis, marketplace, search"},"__typename":"PageMeta","socialDesc":{},"socialTitle":{}},"metaImage":""},{"id":"2a290865-1a42-4002-ba91-af4d814ac205","linkId":"2a290865-1a42-4002-ba91-af4d814ac205","name":"Splash","folder":null,"paths":{"en":"access-confirm","default":"access-confirm"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e6c8ad42-6381-435b-a260-35da07f5e797","sectionTitle":"section","linkId":"9daf1ec7-211f-4a7c-a471-35a610a09019"}],"pageUserGroups":[],"title":{"en":"Cannible | Members Only Cannabis","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Cannible is a personalized cannabis marketplace that helps you find the best stuff based on your preferences from any dispensary anywhere. \n"},"keywords":{"en":"cannabis, marketplace, delivery, pickup"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/opengraph-202202.png?_wwcv=406"},{"id":"de32dbf2-f4d5-4759-a0fe-c775508c88ed","linkId":"de32dbf2-f4d5-4759-a0fe-c775508c88ed","name":"Plans","folder":"STAGING/","paths":{"en":"plans","default":"plans"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"c4603f11-d83a-4394-bd40-2a2065e180bd","sectionTitle":"pageTitleSection","linkId":"2f3af615-a0b3-4abb-b1e1-3000986e3f0f"},{"uid":"1f79d7a9-333b-489f-81f2-ff90c09317a5","sectionTitle":"pricingSection","linkId":"c8e4ac3b-f886-4995-a52f-301887a1864a"},{"uid":"d1bf3790-379a-4064-b9a4-49d9fc33cb37","sectionTitle":"prodBen","linkId":"d69215c8-226f-4da4-ab60-0707b8acabf8"},{"uid":"6c61d984-06b6-4eab-bdde-5eccbbdc7d6d","sectionTitle":"footer","linkId":"d2f0285a-33e6-4c28-bf29-c817cc483233"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"41a2ba29-ce7c-4318-a4d1-2713a5938c1a","linkId":"41a2ba29-ce7c-4318-a4d1-2713a5938c1a","name":"Access Denied (Age)","folder":"STAGING/","paths":{"en":"access-denied-age","default":"access-denied-age"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d4bff185-2f57-4ad6-baa7-b24746fb6682","sectionTitle":"section","linkId":"e59a7a58-e5c8-4082-baf7-6d950164dde7"}],"pageUserGroups":[{}],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"50b83a91-ea08-4ca5-b8da-ce599513a5c2","linkId":"50b83a91-ea08-4ca5-b8da-ce599513a5c2","name":"Get Help","folder":"STAGING/","paths":{"en":"help","default":"help"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"177d8fb7-de6b-45f4-83c5-6e051a866cf2","sectionTitle":"pageTitleSection","linkId":"2fb1b86b-95e4-41de-a075-47660229baa4"},{"uid":"88cb588d-725c-4440-b646-553f23db262a","sectionTitle":"pageTitleSection","linkId":"bd809f3c-706b-4cf8-afb6-03a86c558e95"}],"pageUserGroups":[],"title":{"en":"Get Help | Cannible","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Get help with your Cannible account"},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"29ff18c7-d034-45ca-a7f7-554b2b1c13a9","linkId":"29ff18c7-d034-45ca-a7f7-554b2b1c13a9","name":"ID Scan","folder":"Verif/","paths":{"en":"idscan","default":"idscan"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2c599ac3-0e1e-4fb7-99b1-4b649e75b609","sectionTitle":"Verification - Requested by Backoffice - Copy","linkId":"257d3def-3ce9-4fd8-bbae-01968f2e3605"},{"uid":"e7a8dab3-1e67-4993-b66d-d4851690cdc8","sectionTitle":"BOTTOMSHEETS","linkId":"56d66ad5-1308-4b07-8ad4-07ec9bdafd00"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"578a8c5b-4ad2-4340-b67e-2d27c2c5eab0","linkId":"578a8c5b-4ad2-4340-b67e-2d27c2c5eab0","name":"ID Scan (copy)","folder":"STAGING/","paths":{"en":"idscan-copy","default":"idscan-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"61598556-6888-4fd6-bc32-5b3c89c68bc6","sectionTitle":"Verification - Requested by Backoffice","linkId":"6bf4719b-24b0-40db-9a1d-377c3e812ba9"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2293082f-bb0a-475e-8891-e051c401ffad","linkId":"2293082f-bb0a-475e-8891-e051c401ffad","name":"Kitchen Sink","folder":"12AM/","paths":{"en":"kitchen-sink","default":"kitchen-sink"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"0a6a35ff-1da9-4dde-8aab-306c406d6980","sectionTitle":"Section","linkId":"4bfe1257-a46f-4976-aa1c-af1971e1e957"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7e733c29-b712-4daa-8bda-0d66da3b28eb","linkId":"7e733c29-b712-4daa-8bda-0d66da3b28eb","name":"Access","folder":"DEFIANCE/","paths":{"en":"access","default":"access"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"861defd0-8bf8-4cea-8b4c-0c2739ac1c9c","sectionTitle":"log in","linkId":"8b8528ea-9dd5-4f7c-ba10-fe8a88cec513"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a4799707-6bf2-45a9-9ea4-7935b0a50586","linkId":"a4799707-6bf2-45a9-9ea4-7935b0a50586","name":"Appstore Old","folder":"STAGING/","paths":{"en":"appstore-old","default":"appstore-old"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"83d2171b-f60a-4812-a82d-c4fa219e43f8","sectionTitle":"Section","linkId":"595e9e33-b1c2-4270-9094-dcb157bb6899"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dac9b2ce-bce3-4e93-950b-c2cac88e39f4","linkId":"dac9b2ce-bce3-4e93-950b-c2cac88e39f4","name":"Backoffice","folder":"Backoffice/","paths":{"en":"b/dashboard","default":"b/dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"ebdbdd89-c84f-422d-942c-bbd5412a421b","sectionTitle":"bottomsheet","linkId":"7286d3e6-981c-4359-9857-17d4e9de8ca8"},{"uid":"14598bcd-2180-4b2c-830c-41bbcad91dbc","sectionTitle":"actionSheet-game","linkId":"eca7bfcd-4a84-4d87-8fd4-533c407161cd"},{"uid":"9deb955e-d82e-4962-946e-562bef574ad2","sectionTitle":"actionBar","linkId":"9db5d22d-cf56-4087-8745-91bc927f5f9e"},{"uid":"279ee38c-e284-47b8-ae64-34ecee547029","sectionTitle":"backoffice","linkId":"12dcb54d-5233-4dd1-9ff1-4b94800ac374"}],"pageUserGroups":[],"title":{"en":"Cannible","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Discover the right cannabis products for you"},"keywords":{"en":"cannabis, marketplace, search"},"__typename":"PageMeta","socialDesc":{},"socialTitle":{}},"metaImage":""},{"id":"7da801f6-ebbb-46ce-9d4b-a58f0b1eb01b","linkId":"7da801f6-ebbb-46ce-9d4b-a58f0b1eb01b","name":"Explore","folder":"DEFIANCE/","paths":{"en":"explore","default":"explore"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"53652b8a-c2bc-48d5-bf8a-189feca76e4c","sectionTitle":"shop","linkId":"b53263bc-10e4-4f9d-bdcb-b7df8c9a71c9"},{"uid":"5e3a48db-4d40-46db-bb98-6df85c739555","sectionTitle":"glass loader","linkId":"c683dcff-5cff-427f-b7fc-a81f989925ba"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b01f3283-59a3-47a0-ae37-a83fe8023bcf","linkId":"b01f3283-59a3-47a0-ae37-a83fe8023bcf","name":"Media","folder":"DEFIANCE/","paths":{"en":"media","default":"media"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"53652b8a-c2bc-48d5-bf8a-189feca76e4c","sectionTitle":"shop","linkId":"b53263bc-10e4-4f9d-bdcb-b7df8c9a71c9"},{"uid":"5e3a48db-4d40-46db-bb98-6df85c739555","sectionTitle":"glass loader","linkId":"c683dcff-5cff-427f-b7fc-a81f989925ba"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"301af130-b7d1-4e56-8426-9330230712fb","linkId":"301af130-b7d1-4e56-8426-9330230712fb","name":"Orders","folder":"DEFIANCE/","paths":{"en":"orders","default":"orders"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"53652b8a-c2bc-48d5-bf8a-189feca76e4c","sectionTitle":"shop","linkId":"b53263bc-10e4-4f9d-bdcb-b7df8c9a71c9"},{"uid":"5e3a48db-4d40-46db-bb98-6df85c739555","sectionTitle":"glass loader","linkId":"c683dcff-5cff-427f-b7fc-a81f989925ba"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"2adce8d5-2056-479d-a21a-068f55a8077f","name":"Mapbox","namespace":"mapbox"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"f5856798-485d-47be-b433-d43d771c64e1","name":"Xano Auth","namespace":"xanoAuth"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 406;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;

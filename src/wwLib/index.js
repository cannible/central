import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_f5856798_485d_47be_b433_d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
import plugin_2adce8d5_2056_479d_a21a_068f55a8077f from '@/components/plugins/plugin-2adce8d5-2056-479d-a21a-068f55a8077f/src/wwPlugin.js';
import plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f from '@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-f5856798-485d-47be-b433-d43d771c64e1', plugin_f5856798_485d_47be_b433_d43d771c64e1);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7', plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
wwLib.wwPluginHelper.registerPlugin('plugin-2adce8d5-2056-479d-a21a-068f55a8077f', plugin_2adce8d5_2056_479d_a21a_068f55a8077f);
wwLib.wwPluginHelper.registerPlugin('plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f', plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"f8213103-6e3e-4abd-94a9-276234503abe":"#CD0034","c299ff15-fc1a-46b9-bd44-97ea1f3343a1":"#17172E","e2ebe7e4-cf10-4515-89ca-0cd999674274":"#FCDFBA","09a1c0cf-3d61-4a79-aa0b-98b5591514ba":"#101338","e8dd5bad-4472-4bf4-ab06-7bbf11ca77fe":"#ffc107","2dc3a047-1842-4c1c-bb88-2e65bb39e4f5":"#ff3c00","c8367c63-aad8-48fc-beb5-46d78bde2b6d":"#8400FF","e5e18a9f-9dfb-45cd-aae9-8f85c2c881c7":"#042553","fdbe0f8f-9451-4781-a484-84cf814963be":"#BCC5C8","29782c82-271a-4b85-8ca6-28baa3ce267f":"#00FF66","dc9e700e-128e-4b80-85f4-9bd6f2c7fbd4":"#FAFAFA","6fcc5884-b5f9-4835-99f9-8c9bbb702563":"#090a21","1bdca268-9c8d-4139-9aae-bde39bb47385":"#F755F2","958b94bb-0350-4a1b-b7f5-7fe3fb5a24ec":"#090A210A","644a3d1c-46b9-4631-ae8e-a39426737ca9":"#006AFF","3a29d13c-064e-4f13-a0bf-f2d02c7e69d2":"#757575","c48200fe-3a8d-4be7-934d-d325820b3580":"#0A942A","a5070403-ae80-4dd0-abea-530e8883655e":"#FFFFFF14","8eb4d16a-b1b3-4e52-bd7a-db18f5db6202":"#090A2114","a7405541-5210-4278-ad4e-82386f0f724b":"#090A2129","81138dee-6183-43e4-9796-3ac91cdf804d":"#090A2152","7af887cf-ff08-4684-9076-7354f11c9b2c":"#FFFFFF29","9580d5c0-4109-45e1-82fd-c16292870975":"#090A218F","ab676a52-0dbc-483f-8a14-39b0b2088ccb":"#006AFF14","6c282662-f7ae-4024-b56e-62972fafb051":"#1E1F34","7cba09dc-5d16-4abc-8992-cbc8442002ab":"#090A21E0","45c45cb7-9b29-47eb-83bc-305123a25f70":"#FFFFFF3D","31f9a2cb-7ac6-4bf4-ae30-7e6484b660d7":"#FCF1E3","242ab4e5-2722-40cc-8724-b78916ada907":"#090A21CC","7de492b6-8a3a-4e98-b5cc-19e74a773d81":"#00BFFF","3f1c9551-7f92-4b86-a3e4-dad0d3a6a91f":"#00C8FF","ec67d724-57e0-46d6-9c75-271e52d8cbe3":"#F3C04E","83de42e5-257c-4dba-81c3-a9ddd8717dcd":"#C60C30"} : {"f8213103-6e3e-4abd-94a9-276234503abe":"#CD0034","c299ff15-fc1a-46b9-bd44-97ea1f3343a1":"#17172E","e2ebe7e4-cf10-4515-89ca-0cd999674274":"#FCDFBA","09a1c0cf-3d61-4a79-aa0b-98b5591514ba":"#101338","e8dd5bad-4472-4bf4-ab06-7bbf11ca77fe":"#ffc107","2dc3a047-1842-4c1c-bb88-2e65bb39e4f5":"#ff3c00","c8367c63-aad8-48fc-beb5-46d78bde2b6d":"#8400FF","e5e18a9f-9dfb-45cd-aae9-8f85c2c881c7":"#042553","fdbe0f8f-9451-4781-a484-84cf814963be":"#BCC5C8","29782c82-271a-4b85-8ca6-28baa3ce267f":"#00FF66","dc9e700e-128e-4b80-85f4-9bd6f2c7fbd4":"#FAFAFA","6fcc5884-b5f9-4835-99f9-8c9bbb702563":"#090a21","1bdca268-9c8d-4139-9aae-bde39bb47385":"#F755F2","958b94bb-0350-4a1b-b7f5-7fe3fb5a24ec":"#090A210A","644a3d1c-46b9-4631-ae8e-a39426737ca9":"#006AFF","3a29d13c-064e-4f13-a0bf-f2d02c7e69d2":"#757575","c48200fe-3a8d-4be7-934d-d325820b3580":"#0A942A","a5070403-ae80-4dd0-abea-530e8883655e":"#FFFFFF14","8eb4d16a-b1b3-4e52-bd7a-db18f5db6202":"#090A2114","a7405541-5210-4278-ad4e-82386f0f724b":"#090A2129","81138dee-6183-43e4-9796-3ac91cdf804d":"#090A2152","7af887cf-ff08-4684-9076-7354f11c9b2c":"#FFFFFF29","9580d5c0-4109-45e1-82fd-c16292870975":"#090A218F","ab676a52-0dbc-483f-8a14-39b0b2088ccb":"#006AFF14","6c282662-f7ae-4024-b56e-62972fafb051":"#1E1F34","7cba09dc-5d16-4abc-8992-cbc8442002ab":"#090A21E0","45c45cb7-9b29-47eb-83bc-305123a25f70":"#FFFFFF3D","31f9a2cb-7ac6-4bf4-ae30-7e6484b660d7":"#FCF1E3","242ab4e5-2722-40cc-8724-b78916ada907":"#090A21CC","7de492b6-8a3a-4e98-b5cc-19e74a773d81":"#00BFFF","3f1c9551-7f92-4b86-a3e4-dad0d3a6a91f":"#00C8FF","ec67d724-57e0-46d6-9c75-271e52d8cbe3":"#F3C04E","83de42e5-257c-4dba-81c3-a9ddd8717dcd":"#C60C30"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"450e3dc7-d5b2-46b0-b1c7-19987a43139a":"400 16px/24px var(--ww-default-font-family, sans-serif)","2dccdd8f-d0c2-447b-b778-6d20534e2380":"400 24px/32px var(--ww-default-font-family, sans-serif)","5c9c3016-f265-4d88-86cd-5c6e2f7cf765":"600 10px/16px var(--ww-default-font-family, sans-serif)","c9628a29-e1b0-4acd-9c4b-9bc6cb8f690c":"400 32px/40px var(--ww-default-font-family, sans-serif)","b7d6a436-2d15-45d4-8b83-d390d8eaa716":"600 32px/40px 'Sohne Breit', serif","6e6e58a1-da2d-4576-b508-331ff56b8894":"600 16px/24px var(--ww-default-font-family, sans-serif)","acc8094c-8ff4-46b8-82e0-2393140bf265":"400 12px/18px var(--ww-default-font-family, sans-serif)","7caf2b70-3bd7-44dd-bcbf-93f9d8801206":"600 12px/18px var(--ww-default-font-family, sans-serif)","977ac09b-e2ae-4d19-bbab-5d7a94c268b8":"600 24px/32px 'Sohne Breit', serif","5aa74ae0-68cb-4512-9ac2-df05d8d3a16b":"600 40px/48px 'Sohne Breit', serif","dab176e6-dfec-4c15-bc1d-8d200076b2da":"400 16px/24px 'Sohne Breit', serif","7c2b0e9d-b68b-4198-bda6-27c65454c128":"400 10px/12px var(--ww-default-font-family, sans-serif)","7fef1a4f-0c7c-4826-83f4-2ff4d2dae827":"400 16px/24px 'Sohne Mono', serif","7394f437-ebe6-4433-8231-207a7dc78924":"400 12px/16px 'Sohne Mono', serif","ab0c5b4a-b3f8-4be2-9188-cc440fae1cd0":"400 40px/48px 'Sohne Mono', serif","81a8de7b-cd37-4f13-8c7f-1816e744a286":"700 24px/32px var(--ww-default-font-family, sans-serif)","d6c480cd-39cf-441f-8a4e-a590ea201653":"700 32px/40px var(--ww-default-font-family, sans-serif)","43176a40-9f96-4902-b8bd-2c3f1775a969":"400 24px/32px 'Sohne Mono', serif","4ce1a96c-4c8f-4e1d-833c-155406c19408":"400 40px/48px var(--ww-default-font-family, sans-serif)","45327500-148a-478a-90e9-58a4d560d9c4":"400 56px/64px var(--ww-default-font-family, sans-serif)","92aab6b4-198a-4e89-b903-949340d6ea0a":"400 72px/80px var(--ww-default-font-family, sans-serif)","32df009e-7784-4ada-ad05-206cbe0c92b0":"400 20px/24px 'Sohne Breit', serif","346c9611-5c67-4be4-a303-6c9cda6e0da2":"400 20px/24px var(--ww-default-font-family, sans-serif)","718eb49b-0f8d-4311-8a32-a5aefee653a3":"400 56px/64px 'Sohne Breit', serif","31513cea-7621-4d3d-97ab-5d77b6fd06ad":"400 72px/80px 'Sohne Breit', serif","e7f1bb5a-33f2-4a83-9a0b-ab9950211928":"400 56px/64px 'Sohne Mono', serif","cf780eae-024c-4c18-b2ea-958d080d739f":"400 72px/80px 'Sohne Mono', serif","c16c64fb-01d1-48df-88b4-8643ea1cdcdf":"italic 400 56px/64px 'Sohne Mono', serif","aae74d8b-3058-4573-81b9-243d8f43032c":"400 48px/56px var(--ww-default-font-family, sans-serif)","4a66acf3-3fc1-4c5e-9aa7-aef6021fbed2":"400 10px/14px 'Sohne Mono', serif","16273bf2-db36-41bf-8e3f-e632bd50ce2b":"400 24px/32px 'Sohne Schmal', serif","858fab2d-acca-47c5-8c2d-b860bfe057ee":"700 24px/32px 'Sohne Schmal', serif","51c09dfa-35d0-49f8-90cd-0c820da0f6d5":"400 40px/48px 'Sohne Schmal', serif","4eea3c70-ebf0-4fd5-a34e-20220c7c1100":"700 40px/48px 'Sohne Schmal', serif"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}

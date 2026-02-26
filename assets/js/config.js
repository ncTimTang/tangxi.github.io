const CONFIG = {
    'name': 'MzeroMiko (刘悦)',
    'given_name': 'Yue',
    'family_name': 'Liu',
    'avatar': {
        'avatar': 'assets/data/avatar.png',
        'photo': 'assets/data/M.svg',
        'photo_width': '260',
        'photo_height': '260',
    },
    'bio': 'Stay Hungry, Stay Foolish.',
    'aboutme': 'I am a Ph.D. candidate of <a target="_blank" href="http://lamp.ucas.ac.cn/">LAMP Lab.</a> in <a target="_blank" href="https://eece.ucas.edu.cn/index.php/zh-cn/">the School of Electronic, Electrical and Communication Engineering</a>, <a target="_blank" href="https://www.ucas.ac.cn/">University of Chinese Academy of Sciences</a>, advised by Prof. <a target="_blank" href="https://people.ucas.ac.cn/~jiaojianbin">Jianbin Jiao</a> and Prof. <a target="_blank" href="https://people.ucas.ac.cn/~qxye">Qixiang Ye</a>. I got a B.E. degree in the same school, in June 2021.<br>My research interests include <b>vision representation learning</b> and <b>language modeling</b>.',
    'contact': {
        'location': 'Beijing',
        'mail': 'mailto:liuyue171@mails.ucas.ac.cn',
        'huggingface': 'https://huggingface.co/Mzero17',
        'github': 'https://github.com/MzeroMiko',
        'google': 'https://scholar.google.com/citations?user=94Bfnw8AAAAJ',
        'orcid': 'https://orcid.org/0000-0001-5880-4923',
        'wechat': 'assets/data/wechat.jpg',
    },
    'news': [
    ],
    'publications': [
        {
            "icon": "assets/data/pubs/xdlm.png",
            "title": "Balancing Understanding and Generation in Discrete Diffusion Models",
            "author": "<b>Yue Liu</b>, Yuzhong Zhao, Zheyong Xie, Qixiang Ye, Jianbin Jiao, Yao Hu, Shaosheng Cao, Yunfan Liu",
            "pub": "Arxiv 2026",
            "link": `
                <a target="_blank" href="https://arxiv.org/pdf/2602.01362"><img src="https://img.shields.io/badge/XDLM-arxiv-red?logo=arxiv"></a>
                <a target="_blank" href="https://github.com/MzeroMiko/XDLM"><img src="https://img.shields.io/badge/XDLM-repo-blue?logo=github"></a>
                <a target="_blank" href="https://huggingface.co/papers/2602.01362"><img src="https://img.shields.io/badge/XDLM-huggingface-yellow?logo=huggingface"></a>
            `,
        },
        {
            "icon": "assets/data/pubs/qhad.png",
            "title": "Quantized DiT with hadamard transformation: A technical report",
            "author": "<b>Yue Liu</b>, Wenxi Yang, Jianbin Jiao",
            "pub": "PR Letters, Feb 2026",
            "link": `
                <a target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S016786552500409X"><img src="https://img.shields.io/badge/QHad-arxiv-red?logo=arxiv"></a>
            `,
        },
        // {
        //     "icon": "assets/data/pubs/ccdiff.png",
        //     "title": "CC-Diff++: Spatially Controllable Text-to-Image Synthesis for Remote Sensing with Enhanced Contextual Coherence",
        //     "author": "Mu Zhang, Yunfan Liu, <b>Yue Liu</b>, Yuzhong Zhao, Qixiang Ye",
        //     "pub": "10.1109/TGRS.2025.3616376",
        //     "link": '',
        // },
        {
            "icon": "assets/data/pubs/gmpo.png",
            "title": "Geometric-mean policy optimization",
            "author": "Yuzhong Zhao*, <b>Yue Liu*</b>, Junpeng Liu, Jingye Chen, Xun Wu, Yaru Hao, Tengchao Lv, Shaohan Huang, Lei Cui, Qixiang Ye, Fang Wan, Furu Wei",
            "pub": "ICLR 2026",
            "link": `
                <a target="_blank" href="https://arxiv.org/pdf/2507.20673"><img src="https://img.shields.io/badge/GMPO-arxiv-red?logo=arxiv"></a>
                <a target="_blank" href="https://github.com/callsys/GMPO"><img src="https://img.shields.io/badge/GMPO-repo-blue?logo=github"></a>
                <a target="_blank" href="https://huggingface.co/papers/2507.20673"><img src="https://img.shields.io/badge/GMPO-huggingface-yellow?logo=huggingface"></a>
            `,
        },
        {
            "icon": "assets/data/pubs/vheat.png",
            "title": "Building vision models upon heat conduction",
            "author": "Zhaozhi Wang*, <b>Yue Liu*</b>, Yunjie Tian, Yunfan Liu, Yaowei Wang, Qixiang Ye",
            "pub": "CVPR 2025",
            "link": `
                <a target="_blank" href="https://cvpr.thecvf.com/virtual/2025/poster/34793"><img src="https://img.shields.io/badge/vHeat-poster-1b427d?logo=arxiv"></a>
                <a target="_blank" href="https://arxiv.org/pdf/2405.16555"><img src="https://img.shields.io/badge/vHeat-arxiv-red?logo=arxiv"></a>
                <a target="_blank" href="https://github.com/MzeroMiko/vheat"><img src="https://img.shields.io/badge/vHeat-repo-blue?logo=github"></a>
                `,
        },
        // {
        //     "icon": "assets/data/pubs/dynrefer.png",
        //     "title": "Dynrefer: Delving into region-level multimodal tasks via dynamic resolution",
        //     "author": "Yuzhong Zhao*, Feng Liu*, <b>Yue Liu</b>, Mingxiang Liao, Chen Gong, Qixiang Ye, Fang Wan",
        //     "pub": "CVPR 2025",
        //     "link": '',
        // },
        // {
        //     "icon": "assets/data/pubs/ccdiff.png",
        //     "title": "CC-Diff: enhancing contextual coherence in remote sensing image synthesis",
        //     "author": "Mu Zhang, Yunfan Liu, <b>Yue Liu</b>, Yuzhong Zhao, Qixiang Ye",
        //     "pub": "Arxiv 2024",
        //     "link": '',
        // },
        {
            "icon": "assets/data/pubs/vmamba.png",
            "title": "VMamba: Visual State Space Model",
            "author": "<b>Yue Liu</b>, Yunjie Tian, Yuzhong Zhao, Hongtian Yu, Lingxi Xie, Yaowei Wang, Qixiang Ye, Jianbin Jiao, Yunfan Liu",
            "pub": "NeurIPS 2024 Spotlight",
            "link": `
                <a target="_blank" href="https://neurips.cc/virtual/2024/poster/94617"><img src="https://img.shields.io/badge/VMamba-poster-c580fa?logo=arxiv"></a>
                <a target="_blank" href="https://arxiv.org/pdf/2401.10166"><img src="https://img.shields.io/badge/VMamba-arxiv-red?logo=arxiv"></a>
                <a target="_blank" href="https://github.com/MzeroMiko/VMamba"><img src="https://img.shields.io/badge/VMamba-repo-blue?logo=github"></a>
                <a target="_blank" href="https://mzeromiko.github.io/VMamba"><img src="https://img.shields.io/badge/VMamba-page-blue?logo=github"></a>
                <a target="_blank" href="https://huggingface.co/papers/2401.10166"><img src="https://img.shields.io/badge/VMamba-huggingface-yellow?logo=huggingface"></a>
                `,
        },
        // {
        //     "icon": "assets/data/pubs/controlcap.png",
        //     "title": "Controlcap: Controllable region-level captioning",
        //     "author": "Yuzhong Zhao, <b>Yue Liu</b>, Zonghao Guo, Weijia Wu, Chen Gong, Qixiang Ye, Fang Wan",
        //     "pub": "ECCV 2024",
        //     "link": '',
        // },
    ],
    'projects': [
    ],
}


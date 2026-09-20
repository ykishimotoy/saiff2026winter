// Language switcher (JP default / EN / CH)
// Japanese text is taken from the HTML itself; EN/ZH strings live in the
// dictionaries below. Keys missing from a dictionary fall back to Japanese.
(function () {
    const PAGE_TITLES = {
        ja: '札幌すごいAI映画祭 2026夏 | 作品募集中',
        en: 'Sapporo Sugoi AI Film Festival 2026 Summer | Now Accepting Entries',
        zh: '札幌超赞AI电影节 2026夏 | 作品征集中'
    };

    const I18N = {
        en: {
            // Hero
            'hero-badge': 'Now Accepting Entries',
            'title-main': 'Sapporo Sugoi AI Film Festival 2026 Summer',
            'title-sub': '札幌すごいAI映画祭 2026夏',
            'hero-tagline': 'Try making a film with AI.<br>Every creator\'s work on screen in Sapporo.',
            'badge-onsite': 'Big-screen venue screening',
            'badge-youtube': 'YouTube streaming',
            'badge-beginner': 'Beginners welcome',
            'btn-submit': 'Submit Your Film',
            'btn-learn-article': 'Learn from Articles',
            'btn-learn-video': 'Learn from Videos',
            // Overview
            'sec-overview': 'Event Overview',
            'overview-subtitle': 'An AI film festival, in Sapporo.',
            'overview-p1': 'A community film festival where anyone can experience filmmaking with generative AI. Everyone is welcome, from beginners to experienced creators.',
            'overview-p2': 'Your AI film will be screened on the roughly 200-inch wall-sized screen at <strong>Deep Tech CORE SAPPORO</strong>, reaching audiences both on site and via simultaneous YouTube streaming.',
            'info-label-date': 'Date',
            'info-value-date': 'Saturday, August 29, 2026, 10:00–13:00',
            'info-label-venue': 'Venue',
            'info-label-format': 'Format',
            'info-value-format': 'Venue screening + YouTube streaming',
            'info-label-fee': 'Fee',
            'info-value-fee': 'Free (entry, attendance & viewing)',
            'info-label-reserve': 'Advance registration',
            'info-value-reserve': 'Not required (just come to the venue)',
            'info-label-deadline': 'Entry deadline',
            'info-value-deadline': 'Sunday, August 16, 2026, 23:59 (JST)',
            'overview-note': '* Entries may close early without notice.',
            // About
            'sec-about': 'About the Festival',
            'about-origin': 'I, the organizer, once entered an AI film contest myself. I didn\'t win — but I felt firsthand how the passion for AI filmmaking is rising.<br>I want to turn that into something anyone can take on, right here in Sapporo.<br><span class="about-origin-sig">AI Samurai, Yusuke Kishimoto</span>',
            'about-lead': 'The Sapporo Sugoi AI Film Festival is a community festival where anyone can experience and showcase AI filmmaking.',
            'about-p1': 'Thanks to advances in generative AI, the barrier to filmmaking has never been lower. With just an idea — no professional skills, no expensive equipment — you can create your own film.',
            'about-p2': 'This festival is a place for AI film creators to gather, present their works, and connect.',
            'feature-1': 'AI filmmaking guides and tutorials coming soon',
            'feature-2': 'First-timers are more than welcome',
            'feature-3': 'Venue screening + YouTube streaming',
            // Sponsors
            'sec-sponsors': 'Sponsors',
            'sponsors-desc': 'The sponsor companies, organizations, and services supporting this festival.<br>We deeply appreciate their warm support.',
            'sponsor-nttdmse': 'NTT DATA MSE Corporation',
            'sponsor-hp': 'HP Japan Inc.',
            'sponsor-eques': 'EQUES Inc.',
            'sponsor-dtc': 'DTC Inc.',
            'sponsor-localhosthq': 'LocalHostHQ',
            'sponsor-hanamii': 'hanamii',
            'sponsor-sapporo': 'Supported by: City of Sapporo',
            // Divisions
            'sec-divisions': 'Divisions',
            'divisions-desc': 'We welcome your AI film in two divisions. A special invitation slot, curated by the organizers, will also be screened at the venue.',
            'div1-badge': 'Main Division',
            'div1-title': 'Screening Division',
            'div1-sub': '上映作品部門',
            'div1-duration': 'Runtime: <strong>3–15 min</strong> / Aspect ratio: <strong>16:9</strong>',
            'div1-desc': 'Story, art, music videos… any genre is welcome (content must be suitable for all ages). Any film created primarily with AI generation is eligible; combining it with some live-action footage is fine too. Any language — even invented ones (works not in Japanese, or with unnatural Japanese, require Japanese subtitles).',
            'div1-highlight': 'Creators who can come to Sapporo on the day will <strong>all have their films screened</strong> (one film per person).',
            'div1-h4': 'About screening slots',
            'div1-li1': '<strong>On-site creator slot</strong> | Every film by a creator who can come to Sapporo on the day will be screened. Come to the venue and see your work on the big screen. One film per person.',
            'div1-li2': '<strong>General entry slot (online OK)</strong> | Up to 10 films will be selected from online entries. If there are many entries, selection will be based on the completeness of the work and the originality of its ideas.',
            'div1-broadcast': 'All films screened at the venue<br>+ streamed on YouTube',
            'div2-title': 'Experimental Division',
            'div2-sub': '実験部門',
            'div2-duration': 'Runtime: <strong>1–5 min</strong> / Aspect ratio: <strong>16:9</strong>',
            'div2-desc': '"How do you even make videos with AI?" "I just tried a tool and made something…" — that level of enthusiasm is totally fine. This division is all about putting your work out there first.',
            'div2-highlight': 'We value <strong>challenge</strong> over quality. Your very first film is more than welcome. Watermarks can stay as they are.',
            'div2-h4a': 'Works we welcome',
            'div2-li1': 'A first attempt made right after picking up an AI tool',
            'div2-li2': '"Not finished, but doing something interesting" works',
            'div2-li3': 'Experiments that push a tool to its limits',
            'div2-li4': 'Serious explorations of new visual expression',
            'div2-h4b': 'Screening format',
            'div2-broadcast': 'Films selected by the judges screened at the venue<br>+ streamed on YouTube',
            'div3-title': 'Special Invitation Screening',
            'div3-sub': '特別招待上映枠',
            'div3-duration': 'Runtime: <strong>1–15 min (approx.)</strong> / Aspect ratio: <strong>16:9 recommended</strong> (other ratios possible at the organizers\' discretion)',
            'div3-desc': 'An invitation-only slot: the organizing team researches platforms and social media in Japan and abroad, and directly invites outstanding works and creators we feel deserve to be seen on the big screen.',
            'div3-highlight': 'All invited films will be screened on the venue\'s big screen.',
            'div3-h4': 'About this slot',
            'div3-li1': '16:9 is the standard aspect ratio, but other ratios may be accepted at the organizers\' discretion depending on the nature of the work.',
            'div3-li2': 'In principle, all invited works will be screened at the venue. YouTube streaming will be confirmed with each creator individually.',
            // Apply
            'sec-apply': 'How to Apply',
            'apply-cond-title': 'Entry Requirements',
            'cond-li1': 'Post "I\'m entering!" in the film festival channel of <a href="https://discord.gg/Ve2tQeN7cw" target="_blank" rel="noopener noreferrer" class="guideline-link">our Discord (Sapporo Sugoi AI-kai)</a>',
            'cond-li2': 'The work must be a video created using AI generation tools (partial live-action or mixed footage is OK)',
            'cond-li3': '<strong>Must be suitable for all ages</strong> (no sexual content, no excessive violence, cruelty, gore, or intense horror — nothing unsuitable for children)',
            'cond-li4': 'Created in <strong>16:9</strong> aspect ratio (1080p or higher recommended)',
            'cond-li5': 'The work must be your own creation',
            'cond-li6': 'Must not infringe copyright, portrait rights, or other rights',
            'cond-li7': 'Any language is fine (including fictional or constructed languages)',
            'cond-li8': 'Works not in Japanese, or with unnatural Japanese, must include Japanese subtitles',
            'cond-li9': 'For the Screening Division, remove watermarks where possible, unless they carry special meaning, serve the presentation, or are a matter of the soul<br>(no removal needed for the Experimental Division)',
            'cond-li10': 'Comply with the <a href="guideline.html" target="_blank" rel="noopener noreferrer" class="guideline-link">SAIFF 2026 Summer Production Guidelines</a>',
            'apply-form-title': 'What to Submit',
            'apply-form-sub': 'Please submit the following information',
            'form-li1': 'Email address',
            'form-li2': 'Film title',
            'form-li3': 'Division (Screening / Experimental)',
            'form-li4': 'Runtime',
            'form-li5': 'Video file sharing URL (mp4 stored on Google Drive)',
            'form-li6': 'Synopsis (100+ characters)',
            'form-li7': 'AI tools used and how you used them',
            'form-li8': 'Creator name (handle OK)',
            'form-li9': 'Creator profile (short is fine)',
            'form-li10': 'Social media account or personal site (optional)',
            'form-li11': 'Agreement to the requirements and guidelines',
            'form-li12': 'Join Discord and post "I\'m entering!"',
            'btn-form': 'Go to Entry Form',
            // Awards
            'sec-awards': 'Awards',
            'awards-desc': 'Selected by the judges from all screened films',
            'award1-title': 'Best Film Award',
            'award1-div': 'Screening Division',
            'award1-desc': 'Awarded to the finest film among the Screening Division entries.',
            'award2-title': 'Best Experimental Award',
            'award2-div': 'Experimental Division',
            'award2-desc': 'Awarded to the finest work among the Experimental Division entries.',
            'award3-title': 'Judges\' Special Award',
            'award3-div': 'All films',
            'award3-desc': 'Each judge selects, from all films, the one that struck their own aesthetic sense the most.',
            // Judges
            'sec-judges': 'Judges',
            'judges-desc': 'Alongside organizer AI Samurai, four creators and engineers will watch your films as judges.',
            'judge1-name': 'Rina Onodera',
            'judge1-title': 'XR Creator',
            'judge1-comment': 'This isn\'t a business contest — it\'s a festival. A place where you can express your soul\'s cry at full power, from your own point of view. I can\'t wait to see what possibilities AI brings to that expression. Let\'s make it the best festival, where souls speak to each other!',
            'judge2-name': 'Milia',
            'judge2-title': 'Singer-songwriter spanning the real and virtual worlds',
            'judge2-comment': 'Thank you for inviting me to be a judge!<br>I\'ve made music videos and musicals in virtual spaces, and I\'ve been wanting to try creating videos with AI — so this is a perfect opportunity.<br>I\'m really looking forward to the works I\'ll encounter.',
            'judge3-title': 'Chair, VketReal in Sapporo Executive Committee',
            'judge3-comment': 'Scriptwriting, direction, editing… there are so many ways to use AI. I\'m looking forward to the technical ingenuity — and to the story each work tells with it!',
            'judge4-name': 'Ryoma Kudo (Bonjiko)',
            'judge4-title': 'Vice-chair, Sugoi AI-kai',
            'judge4-comment': 'From astonishing ideas to stories that touch the heart — I\'m looking forward to meeting all kinds of works! Let\'s have fun together in this new form of expression called AI!',
            // CTA
            'cta-title': 'Your AI film,<br>on the big screen',
            'cta-desc': 'Everyone is welcome, from beginners to experienced creators.<br>Take on the challenge in Sapporo.',
            'btn-check-apply': 'How to Apply',
            'btn-discord': 'Ask & Post on Discord',
            // Organizer
            'sec-organizer': 'Organizer',
            'organizer-names': 'Organizer: Yusuke Kishimoto<br>— AI Samurai —<br>Head of Sapporo Sugoi AI-kai',
            'organizer-bio': 'A Sapporo-based community that nurtures a culture of learning, challenging, and enjoying AI. Through regular events and study sessions, we help more people master AI.',
            'social-discord': '💬 Discord: Sapporo Sugoi AI-kai',
            'btn-mail': '✉️ Contact by Email',
            // Footer
            'footer-title': 'Sapporo Sugoi AI Film Festival 2026 Summer',
            'footer-link-overview': 'Overview',
            'footer-link-divisions': 'Divisions',
            'footer-link-apply': 'How to Apply',
            'footer-org': 'Organizer: Sapporo Sugoi AI-kai',
            'footer-venue': 'Venue support: Deep Tech CORE SAPPORO',
            'footer-matsuri': 'This film festival is held as part of Sapporo Sugoi AI Matsuri 2026 Summer',
            'footer-disclaimer': '* This event is run by individual volunteers and does not represent any company or commercial organization.'
        },
        zh: {
            // Hero
            'hero-badge': '作品征集中',
            'title-main': '札幌超赞AI电影节 2026夏',
            'title-sub': 'Sapporo Sugoi AI Film Festival 2026 Summer',
            'hero-tagline': '用AI挑战电影创作。<br>每位创作者的作品，都在札幌上映。',
            'badge-onsite': '现场大银幕上映',
            'badge-youtube': 'YouTube同步直播',
            'badge-beginner': '新手也OK',
            'btn-submit': '报名参赛',
            'btn-learn-article': '看文章学制作',
            'btn-learn-video': '看视频学制作',
            // Overview
            'sec-overview': '活动概要',
            'overview-subtitle': 'AI电影节，在札幌。',
            'overview-p1': '这是一个人人都能体验生成式AI影像创作的社区型电影节。无论新手还是老手，都热烈欢迎。',
            'overview-p2': '你创作的AI电影，将在 <strong>Deep Tech CORE SAPPORO</strong> 整面墙约200英寸的大银幕上放映，并通过现场观影与YouTube同步直播送达更多观众。',
            'info-label-date': '举办日期',
            'info-value-date': '2026年8月29日（周六）10:00〜13:00',
            'info-label-venue': '会场',
            'info-label-format': '放映形式',
            'info-value-format': '会场银幕放映 ＋ YouTube直播',
            'info-label-fee': '参加费用',
            'info-value-fee': '免费（报名、现场参加、观看）',
            'info-label-reserve': '现场观影预约',
            'info-value-reserve': '无需预约（直接到场即可）',
            'info-label-deadline': '报名截止',
            'info-value-deadline': '2026年8月16日（周日）23:59（日本时间）',
            'overview-note': '※即使在截止日期前，也可能不经预告提前结束征集。',
            // About
            'sec-about': '关于札幌超赞AI电影节',
            'about-origin': '作为主办者，我自己也报名过AI电影比赛。结果落选了。但我切身感受到AI电影热潮的高涨。<br>我想把它变成人人都能挑战的形式，在札幌办起来。<br><span class="about-origin-sig">AI武士 岸本悠佑</span>',
            'about-lead': '札幌超赞AI电影节是一个人人都能体验并发表AI影像创作的社区型电影节。',
            'about-p1': '随着生成式AI的进化，影像创作的门槛前所未有地降低。只要有创意，即使不是专业人士、没有昂贵的器材，也能做出属于自己的影像作品。',
            'about-p2': '这个电影节，就是AI影像创作者们相聚、发表作品、彼此连接的地方。',
            'feature-1': 'AI电影制作方法与教程也将陆续公开',
            'feature-2': '热烈欢迎首次挑战的朋友',
            'feature-3': '会场放映 ＋ YouTube直播',
            // Sponsors
            'sec-sponsors': '赞助商',
            'sponsors-desc': '以下是支持本电影节的赞助企业、团体与服务。<br>衷心感谢各位的热情支持。',
            'sponsor-nttdmse': 'NTT DATA MSE株式会社',
            'sponsor-hp': '日本惠普株式会社',
            'sponsor-eques': 'EQUES株式会社',
            'sponsor-dtc': 'DTC株式会社',
            'sponsor-localhosthq': 'LocalHostHQ',
            'sponsor-hanamii': 'hanamii',
            'sponsor-sapporo': '后援：札幌市',
            // Divisions
            'sec-divisions': '征集单元',
            'divisions-desc': '我们通过两个单元征集你的AI影像作品。此外，还设有由主办方精选作品的特别邀请放映单元。',
            'div1-badge': '主竞赛单元',
            'div1-title': '上映作品单元',
            'div1-sub': 'Screening Division',
            'div1-duration': '片长：<strong>3〜15分钟</strong>　／　画面比例：<strong>16:9</strong>',
            'div1-desc': '剧情、艺术、MV……任何类型都OK（内容须适合全年龄观看）。只要是以AI生成为主要手法制作的影像作品即可报名，与部分实拍结合也可以。语言不限，架空语言也OK（非日语或日语不自然的作品须附日语字幕）。',
            'div1-highlight': '当天能来札幌的创作者，作品<strong>全部都会在大银幕上映</strong>（每人限一部）。',
            'div1-h4': '关于放映名额',
            'div1-li1': '<strong>现场创作者名额</strong>｜当天能来札幌的创作者作品全部放映。欢迎来会场，在大银幕上观看自己的作品。每人限一部。',
            'div1-li2': '<strong>一般报名名额（可在线报名）</strong>｜从在线报名作品中选出最多10部进行放映。报名较多时，将以作品完成度和创意趣味性为标准进行评审。',
            'div1-broadcast': '全部作品<br>会场银幕放映 ＋ YouTube直播',
            'div2-title': '实验单元',
            'div2-sub': 'Experimental Division',
            'div2-duration': '片长：<strong>1〜5分钟</strong>　／　画面比例：<strong>16:9</strong>',
            'div2-desc': '"AI做视频到底怎么弄？""我随便试了试做了一个……"——有这样的热情就足够了。这个单元最重要的，就是先把作品交出来。',
            'div2-highlight': '比起质量，我们更看重<strong>挑战精神</strong>。热烈欢迎你的第一部作品。水印保留也没问题。',
            'div2-h4a': '欢迎这样的作品',
            'div2-li1': '刚接触AI工具时随手做出的第一部作品',
            'div2-li2': '"虽然没完成，但在做有趣的尝试"的作品',
            'div2-li3': '挑战工具极限的实验作品',
            'div2-li4': '认真探索全新影像表达的作品',
            'div2-h4b': '放映方式',
            'div2-broadcast': '评委选出的作品<br>会场银幕放映 ＋ YouTube直播',
            'div3-title': '特别邀请放映单元',
            'div3-sub': 'Special Invitation Screening',
            'div3-duration': '片长：<strong>1〜15分钟（参考）</strong>　／　画面比例：<strong>推荐16:9</strong>（经主办方判断也可接受其他比例）',
            'div3-desc': '这是一个邀请制单元：主办团队调研国内外平台和社交媒体，直接邀请那些让我们觉得"必须在大银幕上看到"的优秀作品和创作者进行放映。',
            'div3-highlight': '所有受邀作品都将在会场大银幕上放映。',
            'div3-h4': '关于本单元',
            'div3-li1': '画面比例原则上为16:9，但根据作品特性，主办方也可能接受其他比例。',
            'div3-li2': '受邀作品原则上全部在现场放映。是否进行YouTube直播将逐一与创作者确认。',
            // Apply
            'sec-apply': '报名方式',
            'apply-cond-title': '报名条件',
            'cond-li1': '在<a href="https://discord.gg/Ve2tQeN7cw" target="_blank" rel="noopener noreferrer" class="guideline-link">Discord（札幌超赞AI会）</a>的电影节频道发帖"我要报名！"',
            'cond-li2': '作品须为使用AI生成工具制作的影像（可包含部分实拍或与实拍结合）',
            'cond-li3': '<strong>作品须适合全年龄观看</strong>（不得包含性表现，过度暴力、残虐、血腥表现，过度恐怖表现等不适合儿童观看的内容）',
            'cond-li4': '以<strong>16:9</strong>画面比例制作（推荐1080p以上分辨率）',
            'cond-li5': '作品须为报名者本人制作',
            'cond-li6': '不得侵犯著作权、肖像权等权利',
            'cond-li7': '语言不限（架空语言、人造语言等不存在的语言也可以）',
            'cond-li8': '非日语作品或日语不自然的作品须添加日语字幕',
            'cond-li9': '上映作品单元的作品，除具有特殊意义、演出效果或灵魂层面的原因外，请尽量去除水印<br>（实验单元无需去除）',
            'cond-li10': '符合<a href="guideline.html" target="_blank" rel="noopener noreferrer" class="guideline-link">札幌超赞AI电影节 2026夏 制作指南</a>的要求',
            'apply-form-title': '报名内容',
            'apply-form-sub': '请提交以下信息',
            'form-li1': '电子邮箱',
            'form-li2': '作品标题',
            'form-li3': '单元（上映作品单元 / 实验单元）',
            'form-li4': '片长',
            'form-li5': '视频文件共享链接（mp4存放于Google Drive）',
            'form-li6': '作品简介（100字以上）',
            'form-li7': '使用的AI工具及使用方法',
            'form-li8': '作者名（可用昵称）',
            'form-li9': '作者简介（简短即可）',
            'form-li10': '社交媒体账号或个人网站（可选）',
            'form-li11': '同意报名条件与制作指南',
            'form-li12': '加入Discord并发帖"我要报名！"',
            'btn-form': '前往报名表单',
            // Awards
            'sec-awards': '奖项',
            'awards-desc': '由评委从上映作品中评选产生',
            'award1-title': '最佳作品奖',
            'award1-div': '上映作品单元',
            'award1-desc': '授予上映作品单元报名作品中最优秀的作品。',
            'award2-title': '最佳实验奖',
            'award2-div': '实验单元 (Experimental)',
            'award2-desc': '授予实验单元报名作品中最优秀的作品。',
            'award3-title': '评委特别奖',
            'award3-div': '全部作品',
            'award3-desc': '由每位评委从全部作品中，选出最打动自己审美的作品授予此奖。',
            // Judges
            'sec-judges': '评委介绍',
            'judges-desc': '除主办者AI武士外，还有4位创作者与工程师作为评委观赏大家的作品。',
            'judge1-name': 'Rina Onodera',
            'judge1-title': 'XR创作者',
            'judge1-comment': '这不是商业比赛，而是一场"祭典"。这里是能以自己的视角、全力表达内心呐喊的地方。AI会为这种表达带来怎样的可能性，我现在就已经迫不及待了。来吧，让我们办一场用灵魂对话的最棒的祭典！',
            'judge2-name': 'Milia（米莉亚）',
            'judge2-title': '跨越现实与虚拟的创作歌手',
            'judge2-comment': '感谢邀请我担任评委！<br>我一直在虚拟空间制作MV和音乐剧，正好想尝试用AI制作影像，这是个绝佳的机会。<br>非常期待能遇见怎样的作品。',
            'judge3-title': 'VketReal in 札幌 执行委员会 委员长',
            'judge3-comment': '剧本、演出、剪辑……AI有各种各样的用法。期待大家在技术上的巧思，以及用它讲述怎样的故事！！',
            'judge4-name': '工藤僚马（Bonjiko）',
            'judge4-title': '超赞AI会副代表',
            'judge4-comment': '从令人惊叹的创意，到贴近人心的故事，期待与各种作品相遇！在AI这一全新的表达方式中，大家一起开心地玩吧！',
            // CTA
            'cta-title': '让你的AI影像，<br>登上大银幕',
            'cta-desc': '无论新手还是老手，都热烈欢迎。<br>来札幌挑战一下吧。',
            'btn-check-apply': '查看报名方式',
            'btn-discord': '在Discord提问・发帖',
            // Organizer
            'sec-organizer': '主办',
            'organizer-names': '主办　岸本悠佑<br>〜AI武士〜<br>札幌超赞AI会代表',
            'organizer-bio': '以札幌为据点，培育学习AI、挑战AI、享受AI文化的社区。通过定期活动和学习会，让更多人掌握AI。',
            'social-discord': '💬 Discord: 札幌超赞AI会',
            'btn-mail': '✉️ 邮件咨询',
            // Footer
            'footer-title': '札幌超赞AI电影节 2026夏',
            'footer-link-overview': '活动概要',
            'footer-link-divisions': '征集单元',
            'footer-link-apply': '报名方式',
            'footer-org': '主办：札幌超赞AI会',
            'footer-venue': '会场协助：Deep Tech CORE SAPPORO',
            'footer-matsuri': '本电影节作为"札幌超赞AI祭 2026夏"的一部分举办',
            'footer-disclaimer': '※本活动为个人志愿者活动，不代表任何特定企业或营利团体。'
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        const elements = document.querySelectorAll('[data-i18n]');
        const originals = new Map();
        elements.forEach(function (el) {
            originals.set(el, el.innerHTML);
        });

        const buttons = document.querySelectorAll('.lang-btn');

        function setLang(lang) {
            const dict = I18N[lang] || {};
            elements.forEach(function (el) {
                const key = el.getAttribute('data-i18n');
                el.innerHTML = (lang !== 'ja' && dict[key]) ? dict[key] : originals.get(el);
            });
            document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);
            document.title = PAGE_TITLES[lang] || PAGE_TITLES.ja;
            buttons.forEach(function (btn) {
                btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
            });
            try { localStorage.setItem('saiff-lang', lang); } catch (e) { /* private mode */ }
        }

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLang(btn.getAttribute('data-lang'));
            });
        });

        // Default is Japanese. Priority: ?lang= URL param > previously chosen language.
        const paramLang = new URLSearchParams(location.search).get('lang');
        let saved = null;
        try { saved = localStorage.getItem('saiff-lang'); } catch (e) { /* private mode */ }
        const initial = (paramLang === 'ja' || paramLang === 'en' || paramLang === 'zh') ? paramLang : saved;
        if (initial === 'en' || initial === 'zh') setLang(initial);
    });
})();

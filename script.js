// 1. 嵌入原始 JSON 数据
const initialData = {
    "global_map": {
        "trade_paper_cost": {
            "easy": 1,
            "normal": 1,
            "hard": 3
        },
        "bandit_camp": {
            "gold_for_one_bandit": 25
        },
        "ai_economy": {
            "gdp_k1": -330,
            "soldier_discount": 0,
            "initial_budget": 700,
            "soldier_support_price": 10,
            "army_budget_factor": 0.20000000298023224
        },
        "attack_one_target_cooldown_turns": 10,
        "global_map_defence_alliance_create_cooldown_before_onboard": 4,
        "sir_gdp_factor": 5,
        "defence_alliance_create_cooldown": 4,
        "ai_force": {
            "cooldown": 2,
            "cooldown_before_onboard": 3,
            "cooldown_faceless": 3
        },
        "vassal": {
            "tribute_factor": 1
        },
        "trade_quests_chance": 0.40000000596046448,
        "decoration_per_day": {
            "max": 7
        },
        "ai_king_abuse_chance": 0.14000000059604645
    },
    "actor": {
        "panic_run": 1.4160000085830688,
        "bravery_threshold_loyalty_factor": 0,
        "battle_skill_increase_in_fight": 1,
        "nectar_rage_chance_per_drunk": 0.10000000149011612,
        "nectar_rage_chance_max": 0.5,
        "matching_for_love_threshold": 60,
        "patrol_view_cells": 8,
        "child": {
            "age_exp_limit": 21,
            "education_exp_factor": 4
        },
        "talent_expirience_gain": 5
    },
    "bandits": {
        "maximum_command_skill_level": 7
    },
    "squad": {
        "collision_push": {
            "min": 172,
            "max": 172
        },
        "banner_size": {
            "min": 0.36899998784065247,
            "max": 1
        }
    },
    "prestige": {
        "for_knowledge_mid": 10,
        "for_population": 1,
        "for_knowledge_low": 5,
        "for_allias_population": 1,
        "for_decoration": 3,
        "for_knowledge_high": 15
    },
    "trait": {
        "insightful_call_chance": 0.10000000149011612
    },
    "building": {
        "open_zoom": 0.50199997425079346,
        "breakdown_chance": 0.15000000596046448
    },
    "migration": {
        "happiness_base": 20,
        "happiness_factor": 7,
        "workplaces_factor": 0.029999999329447746
    },
    "gallows": {
        "punishment_watch_radius": 10
    },
    "trees": {
        "grow_duration": 50
    },
    "pregnancy": {
        "chance": 0.5,
        "from_dummy_chance": 0.30000001192092896
    },
    "loyalty": {
        "increase_default": 0,
        "king_relations_factor": 0.5,
        "increase_happy": 5,
        "decrease_unhappy": -5,
        "bribe_factor": 5
    },
    "game": {
        "addiction_chance_mult": 1,
        "death_chance_mult": 1
    },
    "inspection": {
        "performance": {
            "progressive": 0.03,
            "base_factor": 1.045,
            "base": 1.2
        }
    },
    "executor_work": {
        "intimidate_talk_minutes": 60,
        "witness_talk_minutes": 30,
        "intimidation_duration": 2,
        "witness_count": 2
    },
    "wolves": {
        "max_distance_in_cells": 7,
        "wolves_max_distance_to_atack_in_cells": 5,
        "wolves_chance_to_atack": 20
    },
    "bribe": {
        "cooldown": 12,
        "leave_chance": 0.25,
        "add_opinion": 0,
        "give_rings": 10,
        "loss_loyalty": 25
    },
    "skill": {
        "increase_in_use": {
            "command": 2,
            "education": 2,
            "negotiation": 6,
            "manners": 2,
            "oratory": 4,
            "management": 1,
            "knowledge": 0.5
        }
    },
    "render": {
        "border_offset": 8,
        "quest_token_size": 72.726997375488281,
        "border_width": 52,
        "border_radius_factor": 2.4000000953674316,
        "quest_avatar_scale": 0.55000001192092896
    },
    "free_lord": {
        "stay_duration": 10,
        "ring_by_n_levels": 3
    },
    "combat_training": {
        "exp_per_trainer_level": 0.01,
        "skill_points": 0.1
    },
    "church": {
        "preach_conversion_factor": 1.5,
        "max_capacity": 50
    },
    "genius_king": {
        "contempt_strength": -35,
        "gdp_factor": 4,
        "appear_chance": 0.20000000298023224,
        "number_on_start": 3,
        "army_multiply_factor": 2,
        "max_number_in_world": 4,
        "army_budget_factor": 2
    },
    "dummy": {
        "leave_to_forest_chance": 20,
        "thug_combat_level": {
            "min": 2,
            "max": 4
        },
        "join_to_thug_when_punish": 1,
        "turn_to_bandit_chance": 35,
        "steal_minimal_val": 10,
        "criminal_days_to_thug": 2,
        "steal_maximal_val": 20
    },
    "dialogue": {
        "zoom_border": 0.50499999523162842
    },
    "battle": {
        "skill_tickets": {
            "change_factor": 1,
            "enabled": 1,
            "zero_factor": 0.10000000149011612
        },
        "lottery_tickets": {
            "shield_defence_from_arrows_tanaya": 1000,
            "shield_defence_from_arrows": 500
        }
    },
    "book": {
        "rewrite_paper_cost": 3
    },
    "tavern": {
        "max_capacity": 30
    },
    "punishment_mind": {
        "blindness": {
            "strength": 20,
            "duration": 3
        },
        "execution": {
            "strength": 30,
            "duration": 3
        },
        "mask_of_shame": {
            "strength": 10,
            "duration": 3
        },
        "enslavement": {
            "strength": 10,
            "duration": 3
        }
    },
    "moral": {
        "leaving_to_forest": 5
    },
    "knowledge": {
        "price_trader": 100,
        "price_our": 70
    },
    "paper": {
        "messenger_cost ": 1
    },
    "slave": {
        "cost": 50,
        "sex_dayly_chance": 0.5,
        "combat_level_cost": 10,
        "sex_auto_luck": 3,
        "pregnant_chance": 30,
        "slowdown_cost": 10,
        "without_free_mind_cost": 10,
        "fertility_cost": 5,
        "age_cost": 5,
        "trauma_cost": 40
    },
    "mind": {
        "crime_victim": -18,
        "crime_not_punished_modify": -7,
        "battle_enemy_commander_retreat": {
            "modify": 15
        },
        "quality_of_life_high": {
            "modify": 25
        },
        "battle_enemy_commander_dead": {
            "modify": 20
        },
        "limit_most_powerful_minds": 5,
        "fatigue_from_inspection": {
            "modify": -5
        },
        "fatigue_from_work": {
            "modify": -10,
            "duration": 72
        },
        "battle_enemy_soldier_retreat": {
            "modify": 6
        },
        "battle_commander_bonus_factor": 2
    },
    "camera": {
        "smooth_move_speed": 5.3509998321533203
    },
    "soldier": {
        "bow": {
            "prepare_time": 5
        },
        "cost_for_combat_level": 20,
        "distance_to_patrol": 3
    }
};

// 2. 翻译字典 (Category Translations)
const translations = {
    // Main Categories
    "global_map": "🌍 世界地图与宏观经济 (Global Map)",
    "actor": "👤 角色个体行为 (Actor)",
    "bandits": "⚔️ 强盗 (Bandits)",
    "squad": "🛡️ 战斗小队 (Squad)",
    "prestige": "👑 声望获取 (Prestige)",
    "trait": "🧬 特质 (Trait)",
    "building": "🏗️ 建筑 (Building)",
    "migration": "🚶 移民 (Migration)",
    "gallows": "☠️ 刑法 (Gallows)",
    "trees": "🌲 环境/树木 (Trees)",
    "pregnancy": "🤰 生育 (Pregnancy)",
    "loyalty": "🤝 忠诚度 (Loyalty)",
    "game": "⚙️ 游戏全局 (Game)",
    "inspection": "🔍 视察 (Inspection)",
    "executor_work": "⚖️ 行刑官工作 (Executor Work)",
    "wolves": "🐺 狼群 (Wolves)",
    "bribe": "💰 贿赂 (Bribe)",
    "skill": "📚 技能提升速率 (Skill)",
    "render": "🎨 渲染/UI (Render)",
    "free_lord": "🏰 自由领主 (Free Lord)",
    "combat_training": "⚔️ 战斗训练 (Combat Training)",
    "church": "⛪ 教会 (Church)",
    "genius_king": "🧠 天才/强力国王 (Genius King)",
    "dummy": "🤡 平民/无名NPC (Dummy)",
    "dialogue": "💬 对话 (Dialogue)",
    "battle": "⚔️ 战斗计算 (Battle)",
    "book": "📖 书籍 (Book)",
    "tavern": "🍺 酒馆 (Tavern)",
    "punishment_mind": "🧠 惩罚心理影响 (Punishment Mind)",
    "moral": "😊 士气/道德 (Moral)",
    "knowledge": "📜 知识 (Knowledge)",
    "paper": "📝 纸张 (Paper)",
    "slave": "⛓️ 奴隶 (Slave)",
    "mind": "🧠 心情/思维 (Mind)",
    "camera": "📷 镜头 (Camera)",
    "soldier": "💂 士兵 (Soldier)",

    // Global Map Sub-keys
    "trade_paper_cost": "贸易契约/纸张的成本",
    "bandit_camp": "强盗营地",
    "gold_for_one_bandit": "强盗单价/携带金币",
    "ai_economy": "AI经济作弊/平衡参数",
    "gdp_k1": "GDP计算系数",
    "soldier_discount": "AI招募士兵折扣",
    "initial_budget": "AI初始资金",
    "soldier_support_price": "士兵维护费",
    "army_budget_factor": "军队预算占比系数",
    "attack_one_target_cooldown_turns": "AI连续攻击冷却回合",
    "global_map_defence_alliance_create_cooldown_before_onboard": "防御同盟建立冷却(登船前)",
    "sir_gdp_factor": "领主对GDP贡献系数",
    "defence_alliance_create_cooldown": "建立防御同盟冷却",
    "ai_force": "AI军事行动参数",
    "cooldown_before_onboard": "登船前冷却",
    "cooldown_faceless": "无面者冷却",
    "vassal": "附庸国",
    "tribute_factor": "附庸贡品倍率",
    "trade_quests_chance": "贸易任务刷新几率",
    "decoration_per_day": "每日装饰声望上限",
    "ai_king_abuse_chance": "AI国王滥权几率",

    // Actor Sub-keys
    "panic_run": "恐慌逃跑阈值",
    "bravery_threshold_loyalty_factor": "勇气对忠诚影响系数",
    "battle_skill_increase_in_fight": "战斗技能提升速度",
    "nectar_rage_chance_per_drunk": "花蜜酒发酒疯几率",
    "nectar_rage_chance_max": "发酒疯几率上限",
    "matching_for_love_threshold": "恋爱配对阈值",
    "patrol_view_cells": "巡逻视野范围(格)",
    "child": "儿童",
    "age_exp_limit": "成年/经验截止年龄",
    "education_exp_factor": "教育经验倍率",
    "talent_expirience_gain": "天赋经验加成",

    // Bandits & Squad
    "maximum_command_skill_level": "强盗首领最大指挥等级",
    "collision_push": "碰撞推力",
    "banner_size": "战旗大小",
    "min": "最小值",

    // Prestige
    "for_knowledge_mid": "中级知识奖励声望",
    "for_population": "单人口提供声望",
    "for_knowledge_low": "低级知识奖励声望",
    "for_allias_population": "盟友人口提供声望",
    "for_decoration": "装饰度提供声望",
    "for_knowledge_high": "高级知识奖励声望",

    // Trait & Building
    "insightful_call_chance": "洞察特质触发几率",
    "open_zoom": "打开详情缩放比例",
    "breakdown_chance": "建筑故障几率",

    // Migration
    "happiness_base": "移民基础幸福度要求",
    "happiness_factor": "幸福度吸引力系数",
    "workplaces_factor": "空岗位吸引力系数",

    // Gallows & Trees & Pregnancy
    "punishment_watch_radius": "观看惩罚半径",
    "grow_duration": "生长周期",
    "from_dummy_chance": "非正式关系怀孕几率",

    // Loyalty
    "increase_default": "自然增长率",
    "king_relations_factor": "国王关系影响系数",
    "increase_happy": "快乐时增加值",
    "decrease_unhappy": "不爽时减少值",
    "bribe_factor": "贿赂提升效果",

    // Game & Inspection
    "addiction_chance_mult": "上瘾几率倍率",
    "death_chance_mult": "死亡几率倍率",
    "performance": "绩效/产出",
    "progressive": "每次视察提升进度",
    "base_factor": "基础乘区",
    "base": "基础效果",

    // Executor
    "intimidate_talk_minutes": "恐吓谈话时长(分)",
    "witness_talk_minutes": "证人谈话时长(分)",
    "intimidation_duration": "恐吓持续天数",
    "witness_count": "所需证人数量",

    // Wolves
    "max_distance_in_cells": "最大游荡距离",
    "wolves_max_distance_to_atack_in_cells": "攻击警戒范围",
    "wolves_chance_to_atack": "攻击几率",

    // Bribe
    "leave_chance": "贿赂失败离开几率",
    "add_opinion": "增加好感度",
    "give_rings": "消耗戒指数量",
    "loss_loyalty": "贿赂失败扣除忠诚",

    // Skill
    "increase_in_use": "使用中提升速率",
    "command": "指挥",
    "education": "教育",
    "negotiation": "谈判/贸易",
    "manners": "礼仪/社交",
    "oratory": "演讲/传教",
    "management": "管理",
    "knowledge": "知识/智力",

    // Render
    "border_offset": "边界偏移",
    "quest_token_size": "任务图标大小",
    "border_width": "边界宽度",
    "border_radius_factor": "圆角系数",
    "quest_avatar_scale": "任务头像缩放",

    // Free Lord & Combat Training
    "stay_duration": "停留天数",
    "ring_by_n_levels": "招募戒指/等级换算",
    "exp_per_trainer_level": "教官每级提供经验",
    "skill_points": "获得技能点数",

    // Church & Genius King
    "preach_conversion_factor": "传教转化效率",
    "max_capacity": "最大容纳人数",
    "contempt_strength": "蔑视强度(外交惩罚)",
    "gdp_factor": "GDP加成系数",
    "appear_chance": "出现几率",
    "number_on_start": "开局数量",
    "army_multiply_factor": "军队规模倍率",
    "max_number_in_world": "世界最大数量",
    "army_budget_factor": "军费预算倍率",

    // Dummy
    "leave_to_forest_chance": "逃往森林当强盗几率",
    "thug_combat_level": "暴徒战斗等级范围",
    "join_to_thug_when_punish": "受罚加入暴徒倾向",
    "turn_to_bandit_chance": "转化为强盗几率",
    "steal_minimal_val": "偷窃最小价值",
    "criminal_days_to_thug": "变职业暴徒天数",
    "steal_maximal_val": "偷窃最大价值",

    // Dialogue & Battle
    "zoom_border": "对话缩放",
    "skill_tickets": "技能权重",
    "change_factor": "变化系数",
    "enabled": "启用",
    "zero_factor": "零值系数",
    "lottery_tickets": "彩票/命中权重",
    "shield_defence_from_arrows_tanaya": "塔娜雅盾牌防箭权重",
    "shield_defence_from_arrows": "普通盾牌防箭权重",

    // Book & Tavern & Punishment
    "rewrite_paper_cost": "抄写纸张成本",
    "blindness": "致盲",
    "execution": "处决",
    "mask_of_shame": "羞耻面具",
    "enslavement": "贬为奴隶",
    "strength": "心情影响强度",

    // Moral & Knowledge & Paper
    "leaving_to_forest": "逃往森林阈值",
    "price_trader": "商人书价",
    "price_our": "自制/内部书价",
    "messenger_cost ": "信使消耗纸张",

    // Slave
    "sex_dayly_chance": "每日性行为几率",
    "combat_level_cost": "战斗等级额外价格",
    "sex_auto_luck": "自动幸运值",
    "pregnant_chance": "怀孕几率",
    "slowdown_cost": "迟缓价格减免",
    "without_free_mind_cost": "无自由意志价格",
    "fertility_cost": "生育能力价格",
    "age_cost": "年龄价格变动",
    "trauma_cost": "创伤价格减免",

    // Mind
    "crime_victim": "犯罪受害者",
    "crime_not_punished_modify": "罪犯未受罚修正",
    "battle_enemy_commander_retreat": "敌军指挥官撤退",
    "quality_of_life_high": "高生活质量",
    "battle_enemy_commander_dead": "敌军指挥官阵亡",
    "limit_most_powerful_minds": "强力心情叠加限制",
    "fatigue_from_inspection": "视察疲劳",
    "fatigue_from_work": "工作疲劳",
    "battle_enemy_soldier_retreat": "敌方士兵撤退",
    "battle_commander_bonus_factor": "指挥官加成系数",

    // Camera & Soldier
    "smooth_move_speed": "镜头平滑移动速度",
    "bow": "弓箭",
    "prepare_time": "攻击准备时间",
    "cost_for_combat_level": "佣兵每级战斗费用",
    "distance_to_patrol": "巡逻点判定距离",

    // Common Subkeys
    "chance": "几率",
    "cost": "成本",
    "price": "价格",
    "cooldown": "冷却时间",
    "factor": "系数",
    "duration": "持续时间",
    "amount": "数量",
    "easy": "简单",
    "normal": "普通",
    "hard": "困难"
};

// 格式化 Key 名称 (e.g. "nectar_rage_chance" -> "Nectar Rage Chance")
function formatKey(key) {
    if (translations[key]) return translations[key];

    // 处理常用后缀翻译(Fallback)
    let suffix = "";
    if (key.includes("chance")) suffix = " (几率)";
    if (key.includes("cost")) suffix = " (成本)";

    // 英文格式化
    const readable = key.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return readable + suffix;
}

// 3. 递归渲染表单
function renderEditor(data, container, path = [], level = 0) {
    for (const key in data) {
        const value = data[key];
        const currentPath = [...path, key];

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // 如果是对象，创建折叠组
            const group = document.createElement('div');
            group.className = level === 0 ? 'group card' : 'group sub-group';

            const header = document.createElement('div');
            header.className = 'group-header';
            header.innerText = formatKey(key);

            // 绑定点击事件: 切换隐藏状态
            header.onclick = (e) => {
                e.stopPropagation();
                content.classList.toggle('hidden');
                header.classList.toggle('collapsed');
            };

            const content = document.createElement('div');
            content.className = 'group-content';

            // 默认全部折叠 (Default Collapsed)
            content.classList.add('hidden');
            header.classList.add('collapsed');

            group.appendChild(header);
            group.appendChild(content);
            container.appendChild(group);

            // 递归
            renderEditor(value, content, currentPath, level + 1);
        } else {
            // 如果是具体数值，创建输入框
            const row = document.createElement('div');
            row.className = 'field-row';

            const label = document.createElement('div');
            label.className = 'field-label';
            label.innerHTML = `${formatKey(key)} <span class="field-key-raw">${key}</span>`;

            const input = document.createElement('input');
            input.type = typeof value === 'number' ? 'number' : 'text';
            input.step = "any"; // 允许小数
            input.value = value;
            input.dataset.path = JSON.stringify(currentPath);

            // 绑定修改事件
            input.onchange = (e) => updateData(currentPath, e.target.value, typeof value);

            row.appendChild(label);
            row.appendChild(input);
            container.appendChild(row);
        }
    }
}

// 4. 更新数据
function updateData(path, value, type) {
    let current = initialData;
    for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
    }

    const lastKey = path[path.length - 1];
    if (type === 'number') {
        current[lastKey] = parseFloat(value);
    } else {
        current[lastKey] = value;
    }
}

// 5. 导出文件
function downloadJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(initialData, null, 4));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "gameplay_variables.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// 6. 展开/折叠所有
function toggleAll(expand = true) {
    const contents = document.querySelectorAll('.group-content');
    const headers = document.querySelectorAll('.group-header');

    contents.forEach(content => {
        if (expand) content.classList.remove('hidden');
        else content.classList.add('hidden');
    });

    headers.forEach(header => {
        if (expand) header.classList.remove('collapsed');
        else header.classList.add('collapsed');
    });
}

// 7. 处理文件导入
// 7. 处理文件导入
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            let jsonString = e.target.result;

            // 1. 移除单行注释 (// ...)
            jsonString = jsonString.replace(/\/\/.*$/gm, "");

            // 2. 移除多行注释 (/* ... */)
            jsonString = jsonString.replace(/\/\*[\s\S]*?\*\//g, "");

            // 3. 移除尾随逗号 (trailing commas)
            // 匹配: 逗号 + 任意空白 + 右大括号/右中括号
            jsonString = jsonString.replace(/,(\s*[}\]])/g, '$1');

            const json = JSON.parse(jsonString);

            // 更新全局数据
            // 清空当前编辑器
            const root = document.getElementById('editor-root');
            root.innerHTML = '';

            // 让我们采用覆盖属性的方法，保持 const 引用不变
            for (const key in initialData) delete initialData[key];
            Object.assign(initialData, json);

            renderEditor(initialData, root);
            alert("文件导入成功！");
        } catch (error) {
            console.error(error);
            alert("文件解析失败！\n\n请检查文件格式。错误信息:\n" + error.message);
        }
    };
    reader.readAsText(file);
}

// 初始化
const root = document.getElementById('editor-root');
renderEditor(initialData, root);

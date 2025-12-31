import { app } from "../../scripts/app.js";

// 语言切换扩展
app.registerExtension({
    name: "ComfyUI-ZH-EN-Switcher.LanguageSwitcher",
    
    async setup() {
        // 等待app完全初始化
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 获取当前语言设置（使用ComfyUI的设置API）
        const getCurrentLanguage = () => {
            // 尝试从ComfyUI的设置中获取
            if (app.ui && app.ui.settings) {
                try {
                    const locale = app.ui.settings.getSettingValue("Comfy.Locale");
                    if (locale) {
                        // 去除引号，获取实际值
                        const cleanLocale = String(locale).replace(/['"]/g, '').toLowerCase();
                        if (cleanLocale.includes('zh') || cleanLocale.includes('中文')) {
                            return 'zh';
                        }
                        return 'en';
                    }
                } catch (e) {
                    // 忽略错误，使用备用方案
                }
            }
            
            // 备用方案：从localStorage读取
            let currentLang = localStorage.getItem("Comfy.Settings.Comfy.Locale");
            if (!currentLang) {
                currentLang = localStorage.getItem("Comfy.Locale");
            }
            
            if (currentLang) {
                // 去除引号，获取实际值
                // ComfyUI存储的格式是 "zh" 或 "en" (包含引号)
                const cleanLang = String(currentLang).replace(/['"]/g, '').toLowerCase();
                if (cleanLang.includes('zh') || cleanLang.includes('中文') || cleanLang.includes('chinese')) {
                    return 'zh';
                }
                return 'en';
            }
            
            // 默认返回英文
            return 'en';
        };
        
        // 创建语言切换按钮
        const langSwitchBtn = document.createElement("button");
        langSwitchBtn.id = "lang-switch-btn";
        
        // 根据当前语言设置按钮文本（无图标，仅文字）
        const updateButtonText = () => {
            const currentLang = getCurrentLanguage();
            if (currentLang === 'zh') {
                langSwitchBtn.textContent = "中文";
                langSwitchBtn.title = "点击切换到英文 / Click to switch to English";
            } else {
                langSwitchBtn.textContent = "EN";
                langSwitchBtn.title = "点击切换到中文 / Click to switch to Chinese";
            }
        };
        
        updateButtonText();
        
        // 设置按钮基础样式（会被insertButton调整）
        langSwitchBtn.style.cssText = `
            background: rgba(40, 40, 40, 0.95);
            border: 1px solid rgba(80, 80, 80, 0.8);
            border-radius: 6px;
            padding: 0 14px;
            cursor: pointer;
            color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s ease;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
            font-weight: 500;
            font-size: 13px;
            min-width: 50px;
            height: 32px;
            user-select: none;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        `;
        
        // 鼠标悬停效果
        langSwitchBtn.addEventListener("mouseenter", () => {
            langSwitchBtn.style.background = "rgba(60, 120, 200, 0.9)";
            langSwitchBtn.style.borderColor = "rgba(100, 150, 220, 0.9)";
        });
        
        langSwitchBtn.addEventListener("mouseleave", () => {
            langSwitchBtn.style.background = "rgba(40, 40, 40, 0.95)";
            langSwitchBtn.style.borderColor = "rgba(80, 80, 80, 0.8)";
        });
        
        // 点击事件 - 切换语言
        langSwitchBtn.addEventListener("click", async (e) => {
            // 获取当前语言
            const currentLang = getCurrentLanguage();
            
            // 确定新语言
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            console.log(`ComfyUI-ZH-EN-Switcher: 切换语言 ${currentLang} → ${newLang}`);
            
            // 使用ComfyUI的设置API进行热更新（不刷新页面）
            if (app.ui && app.ui.settings && typeof app.ui.settings.setSettingValue === 'function') {
                try {
                    // 使用设置API更新，这会自动触发热更新（类似设置界面的行为）
                    await app.ui.settings.setSettingValue("Comfy.Locale", newLang);
                    
                    console.log("✓ 语言已切换（热更新）");
                    
                    // 更新按钮显示
                    setTimeout(() => updateButtonText(), 500);
                    
                } catch (e) {
                    console.warn("设置API调用失败，回退到刷新方案:", e);
                    fallbackReload(newLang);
                }
            } else {
                console.log("设置API不可用，使用刷新方案");
                fallbackReload(newLang);
            }
            
            // 备用刷新方案
            function fallbackReload(lang) {
                const formattedValue = `"${lang}"`;
                localStorage.setItem("Comfy.Settings.Comfy.Locale", formattedValue);
                localStorage.setItem("Comfy.Locale", formattedValue);
                
                const hotreloadLang = lang === 'zh' ? 'zh-CN' : 'en-US';
                localStorage.setItem("hotreload_language", hotreloadLang);
                
                window.onbeforeunload = null;
                location.reload();
            }
        });
        
        // 智能插入按钮到工具栏内部
        const insertButton = () => {
            // 查找actionbar-container容器
            const actionbar = document.querySelector('.actionbar-container') || 
                            document.querySelector('[class*="actionbar"]');
            
            if (actionbar) {
                console.log("✓ 找到actionbar容器，插入到工具栏内部");
                
                // 查找工具栏内的按钮，获取它们的实际高度
                const toolbarButtons = actionbar.querySelectorAll('button, div[role="button"]');
                let buttonHeight = 32; // 默认高度
                
                if (toolbarButtons.length > 0) {
                    const firstBtn = toolbarButtons[0];
                    const btnRect = firstBtn.getBoundingClientRect();
                    buttonHeight = btnRect.height;
                    console.log(`工具栏按钮高度: ${buttonHeight}px`);
                }
                
                // 调整按钮样式为inline模式
                langSwitchBtn.style.position = "relative";
                langSwitchBtn.style.display = "inline-flex";
                langSwitchBtn.style.height = `${buttonHeight}px`;
                langSwitchBtn.style.margin = "0 8px"; // 左右间距
                langSwitchBtn.style.cursor = "pointer";
                langSwitchBtn.style.verticalAlign = "middle";
                
                // 插入到工具栏容器的第一个位置（最左边）
                if (actionbar.firstChild) {
                    actionbar.insertBefore(langSwitchBtn, actionbar.firstChild);
                } else {
                    actionbar.appendChild(langSwitchBtn);
                }
                
                console.log(`按钮已插入到工具栏，高度: ${buttonHeight}px`);
                return true;
            }
            
            // 如果找不到工具栏，添加到body并使用fixed定位
            console.log("⚠ 未找到工具栏，使用独立定位");
            langSwitchBtn.style.position = "fixed";
            langSwitchBtn.style.left = "20px";
            langSwitchBtn.style.top = "80px";
            langSwitchBtn.style.cursor = "pointer";
            document.body.appendChild(langSwitchBtn);
            return false;
        };
        
        // 延迟插入，等待DOM完全加载
        setTimeout(() => {
            const inserted = insertButton();
            if (inserted) {
                console.log("ComfyUI-ZH-EN-Switcher: 按钮已插入到工具栏");
            } else {
                console.log("ComfyUI-ZH-EN-Switcher: 按钮使用独立定位");
            }
        }, 1500);
        
        console.log("ComfyUI-ZH-EN-Switcher: 语言切换按钮初始化完成");
    }
});



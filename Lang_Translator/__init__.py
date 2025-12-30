"""
Lang_Translator - ComfyUI语言切换插件
在ComfyUI界面添加一个悬浮的语言切换按钮
"""

# 定义Web目录，ComfyUI会自动加载js文件夹中的JavaScript文件
WEB_DIRECTORY = "./js"

# 节点类映射（这个插件主要是前端UI，所以这里可以为空）
NODE_CLASS_MAPPINGS = {}

# 节点显示名称映射
NODE_DISPLAY_NAME_MAPPINGS = {}

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS', 'WEB_DIRECTORY']


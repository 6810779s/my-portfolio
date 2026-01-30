'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Folder, FolderOpen, FileCode } from 'lucide-react';
import type { FolderItem } from '@/types';

interface FolderNodeProps {
  item: FolderItem;
  locale: 'ko' | 'en';
  level: number;
}

function FolderNode({ item, locale, level }: FolderNodeProps) {
  const [isOpen, setIsOpen] = useState(level < 2);
  const hasChildren = item.children && item.children.length > 0;
  const isFile = !hasChildren && !item.name.endsWith('/');

  return (
    <div className="select-none">
      <div
        className={`flex items-start gap-1.5 py-0.5 rounded-md transition-colors ${
          hasChildren ? 'cursor-pointer hover:bg-white/10' : ''
        }`}
        style={{ paddingLeft: `${level * 16}px` }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {/* Expand/Collapse Icon or Spacer */}
        <span className="flex-shrink-0 w-4 h-5 flex items-center justify-center">
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            )
          ) : null}
        </span>

        {/* Folder/File Icon */}
        <span className="flex-shrink-0 w-4 h-5 flex items-center justify-center">
          {isFile ? (
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
          ) : isOpen ? (
            <FolderOpen className="w-3.5 h-3.5 text-yellow-500" />
          ) : (
            <Folder className="w-3.5 h-3.5 text-yellow-500" />
          )}
        </span>

        {/* Name */}
        <span className="flex-1 min-w-0">
          <span className={`text-sm ${isFile ? 'text-gray-300' : 'font-medium text-gray-100'}`}>
            {item.name}
          </span>
          {item.description && (
            <span className="ml-2 text-xs text-gray-500">
              {item.description[locale]}
            </span>
          )}
        </span>
      </div>

      {/* Children */}
      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            {item.children!.map((child, index) => (
              <FolderNode
                key={`${child.name}-${index}`}
                item={child}
                locale={locale}
                level={level + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FolderStructureProps {
  structure: FolderItem[];
  locale: 'ko' | 'en';
}

export function FolderStructure({ structure, locale }: FolderStructureProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-[#1e1e1e] dark:bg-[#0d1117]">
      {/* Header - looks like a terminal/code editor header */}
      <div className="flex items-center px-4 py-2.5 bg-[#2d2d2d] dark:bg-[#161b22] border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-2 text-sm font-mono text-gray-400">src/</span>
        </div>
      </div>

      {/* Tree Content */}
      <div className="p-3 font-mono text-sm max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {structure.map((item, index) => (
          <FolderNode
            key={`${item.name}-${index}`}
            item={item}
            locale={locale}
            level={0}
          />
        ))}
      </div>
    </div>
  );
}

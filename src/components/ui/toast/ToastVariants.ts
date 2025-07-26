export function getVariantClass(variant: string) {
  switch (variant) {
    case 'success':
      return 'bg-green-100 border-green-300 text-green-800';
    case 'info':
      return 'bg-blue-100 border-blue-300 text-blue-800';
    case 'warning':
      return 'bg-yellow-100 border-yellow-300 text-yellow-800';
    case 'error':
      return 'bg-red-100 border-red-300 text-red-800';
    case 'default':
    default:
      return 'bg-white border-gray-200 text-gray-900 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100';
  }
}

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const AnalysisPresenter = () => {
  return (
    <AuthenticatedLayout
      header={"Analysis"}
    >
        <Head title="Analysis" />
      <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="p-4 overflow-hidden bg-white shadow-sm sm:rounded-lg">
              <p>Coming soon...</p>
          </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default AnalysisPresenter
